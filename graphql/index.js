
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const domain = process.env.SHOPIFY_STORE_DOMAIN
const graphqlEndpoint = `/api/2023-04/graphql.json`
const endpoint  = `${domain}${graphqlEndpoint}`

const shopifyFetch = async function({query, variables, headers, cache = 'force-cache'}){
    try {
        const response = await fetch(endpoint,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': key,
              ...headers
            },
            body: JSON.stringify({
              ...(query && { query }),
              ...(variables && { variables })
            }),
            cache,
            next: { revalidate: 900 } // 15 minutes
          });

          const body = await response.json();

          if (body.errors) {
            throw body.errors[0];
          }

          return {
            status: response.status,
            body
          };
    } catch (error) {
        console.log(error)
    }
}

