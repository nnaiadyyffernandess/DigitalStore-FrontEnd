import { Link } from 'react-router-dom'
import './CollectionCard.css'

function CollectionCard({ image, title, link = '/products' }) {
  return (
    <Link to={link} className="collection-card">
      <img src={image} alt={title} />
    </Link>
  )
}

export default CollectionCard