import { gql } from 'graphql-request';

export const createCheckoutSession = gql`
  mutation createCheckoutSession($items: [CreateSessionInput!]!) {
    createCheckoutSession(items: $items) {
      url
    }
`;
