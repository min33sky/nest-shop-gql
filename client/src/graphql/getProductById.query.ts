import { gql } from 'graphql-request';

export const getProductById = gql`
  query getProductById($id: Int!) {
    product(id: $id) {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
    }
  }
`;
