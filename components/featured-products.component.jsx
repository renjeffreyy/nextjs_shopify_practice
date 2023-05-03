import { ProductCard } from "./product-card.component";
import { getCollectionProducts } from "../graphql/index";
import { useState, useEffect } from 'react';

function FeaturedProducts() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getCollectionProducts(
                "hidden-homepage-featured-items"
              );
              console.log('featured products data',res)
              setProducts(res);
        };
    
        fetchProducts();
      }, []);

  // Collections that start with `hidden-*` are hidden from the search page.

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