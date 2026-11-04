import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'

function ProductListing({ products, columns = 4 }) {
  return (
    <div
      className="product-listing"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductListing