import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CategoryList.css'

const categories = [
  { id: 'camisetas', name: 'Camisetas', image: '/camisetas.png' },
  { id: 'calcas', name: 'Calças', image: '/calcas.png' },
  { id: 'bones', name: 'Bonés', image: '/bones.png' },
  { id: 'headphones', name: 'Headphones', image: '/headphones.png' },
  { id: 'tenis', name: 'Tênis', image: '/tenis.png' },
]

function CategoryList() {
  const [active, setActive] = useState('camisetas')

  return (
    <ul className="category-list">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            to="/products"
            className={category.id === active ? 'category-item active' : 'category-item'}
            onMouseEnter={() => setActive(category.id)}
            onFocus={() => setActive(category.id)}
          >
            <span className="category-circle">
              <span
                className="category-icon"
                style={{ '--icon': `url(${category.image})` }}
              />
            </span>
            <span className="category-name">{category.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList