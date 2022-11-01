import { gql } from 'graphql-request';

export const getProducts = gql`
  query getProducts {
    products {
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
