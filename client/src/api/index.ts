import { createCheckoutSession } from '@/graphql/createCheckoutSession';
import { getProductById as getProduct } from '@/graphql/getProductById.query';
import { getProducts } from '@/graphql/getProducts.query';
import { Product } from '@/graphql/types';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/graphql', {
  headers: {
    // authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export async function getAllProducts() {
  const result = await client.request<ProductsResponse>(getProducts);
  return result;
}

export async function getProductById(id: number) {
  const result = await client.request<ProductResponse>(getProduct, { id });
  return result;
}

export async function createCheckOut({
  items,
}: {
  items: {
    id: number;
    quantity: number;
  }[];
}) {
  const result = await client.request(createCheckoutSession, { items });
  return result;
}

interface ProductsResponse {
  products: Product[];
}

interface ProductResponse {
  product: Product;
}
