import { PrismaClient } from '@prisma/client';
import products from './products';

const prisma = new PrismaClient();

async function seedProducts() {
  await Promise.all(
    products.map((product) =>
      prisma.product.create({
        data: {
          name: product.name,
          image: product.image,
          description: product.description,
          brand: product.brand,
          price: product.price,
        },
      }),
    ),
  );
}

seedProducts();
