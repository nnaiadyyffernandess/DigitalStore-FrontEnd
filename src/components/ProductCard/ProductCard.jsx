import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ id, image, name, price, priceDiscount, discount }) {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-image">
        {discount && <span className="discount-tag">{discount}% OFF</span>}
        <img src={image} alt={name} />
      </div>
      <span className="product-card-category">Tênis</span>
      <h3>{name}</h3>
      <div className="product-card-price">
        {priceDiscount ? (
          <>
            <span className="old-price">${price}</span>
            <span className="current-price">${priceDiscount}</span>
          </>
        ) : (
          <span className="current-price">${price}</span>
        )}
      </div>
    </Link>
  )
}

export default ProductCard