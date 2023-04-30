import { ProductCard } from "./product-card.component"

export const FeaturedProducts = () => {
    const products = [1,2,3]
    return (
        <div className="grid">
            { products.map( product => <ProductCard key={product} id={ product } />)}
        </div>
    )
}