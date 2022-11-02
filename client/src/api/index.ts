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

interface ProductsResponse {
  products: Product[];
}
