
import { getCollectionProductsQuery } from "./queries/collection";


const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '410b4d143dd5f61a5ba6efe82100b95e'
const domain = process.env.SHOPIFY_STORE_DOMAIN || 'https://jeffrey-nextjs-dev.myshopify.com'
const graphqlEndpoint = `/api/2023-04/graphql.json`;
const endpoint = `${domain}${graphqlEndpoint}`;

export async function shopifyFetch({
  query,
  variables,
  headers,
  cache = "force-cache",
}) {
console.log(key, domain, graphqlEndpoint, endpoint)
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": key,
    ...headers,
  },
  body: JSON.stringify({
    ...(query && { query }),
    ...(variables && { variables }),
  }),
  cache,
  next: { revalidate: 900 }, // 15 minutes
}


  console.log('body',options)
  try {
    const result = await fetch(endpoint, options );

    const body = await result.json();
    console.log('from shopifyFetch',body,'from shopifyFetch')

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    console.log(e);
  }
}

const removeEdgesAndNodes = (array) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeProduct = (product) => {

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: removeEdgesAndNodes(images),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeProducts = (products) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};



export async function getCollectionProducts(handle) {
  const res = await shopifyFetch({
    query: getCollectionProductsQuery,
    variables: {
      handle,
    },
  });

  if (!res.body.data.collection) {
    console.log('No collection found for handle', handle);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));

}
