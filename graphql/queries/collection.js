import productFragment  from "../fragments/product";

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts($handle: String!) {
    collection(handle: $handle) {
      products(first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;

