import { Link } from 'react-router-dom'
import './CollectionCard.css'

function CollectionCard({ image, title, discount, link = '/products' }) {
  return (
    <div className="collection-card">
      <img src={image} alt={title} />
      {discount && <span className="collection-tag">{discount}% OFF</span>}
      <Link to={link} className="collection-button">Comprar</Link>
    </div>
  )
}

export default CollectionCard