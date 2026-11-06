import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'

function ProductListing({ products, columns = 4 }) {
  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductListing