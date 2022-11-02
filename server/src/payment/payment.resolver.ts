import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { Payment } from './entities/payment.entity';
import { CreateSessionInput } from './dto/create-session.input';
import { CreateSessionResponse } from './dto/create-session.respnose';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => CreateSessionResponse)
  createCheckoutSession(
    @Args({
      name: 'items',
      type: () => [CreateSessionInput],
    })
    createSessionInput: CreateSessionInput[],
  ) {
    console.log('createSessionInput', createSessionInput);
    return this.paymentService.createCheckoutSession(createSessionInput);
  }
}
