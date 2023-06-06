import { ProductCard } from "./product-card.component";
import { useState, useEffect } from 'react';

function FeaturedProducts() {
  const products = [0,1,2]
  if(!products){
      return <p>loading...</p>
  }

  return (
    <section
      className="lg:grid lg:grid-cols-6 lg:grid-rows-2"
      data-testid="homepage-products"
    >
      { products.map((product) => <ProductCard key={product.id} product={product} />) }
    </section>
  );
}

export default FeaturedProducts;