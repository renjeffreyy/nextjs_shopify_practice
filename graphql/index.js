

const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '410b4d143dd5f61a5ba6efe82100b95e'
const domain = process.env.SHOPIFY_STORE_DOMAIN || 'https://jeffrey-nextjs-dev.myshopify.com'
const graphqlEndpoint = `/api/2023-04/graphql.json`;
const endpoint = `${domain}${graphqlEndpoint}`;

