import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { Stripe } from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2022-08-01',
    });
  }

  async createCheckoutSession(items: { id: number; quantity: number }[]) {
    const storedItems = await Promise.all(
      items.map(async (item) => {
        const targetItem = await this.prisma.product.findUnique({
          where: {
            id: item.id,
          },
          select: {
            price: true,
            name: true,
          },
        });

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: targetItem.name,
            },
            unit_amount: targetItem.price * 100, // cents 단위라 100 곱해야함
          },
          quantity: item.quantity,
        };
      }),
    );

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: storedItems,
      mode: 'payment',
      success_url: `${this.configService.get('CLIENT_URL')}/success`,
      cancel_url: `${this.configService.get('CLIENT_URL')}/cancel`,
    });

    return {
      url: session.url,
    };
  }
}
