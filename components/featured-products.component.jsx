import { ProductCard } from "./product-card.component";
import { useState, useEffect } from 'react';

function FeaturedProducts() {
  const products = [0,1,2]
  if(!products){
      return <p>loading...</p>
  }

  console.log(process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN, process.env.SHOPIFY_STORE_DOMAIN)

  return (
    <section
      className="lg:grid lg:grid-cols-3 px-6 py-8"
      data-testid="homepage-products"
    >
      { products.map((product) => <ProductCard key={product.id} product={product} />) }
    </section>
  );
}

export default FeaturedProducts;