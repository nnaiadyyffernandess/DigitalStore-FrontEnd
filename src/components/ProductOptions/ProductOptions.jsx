import { useState } from 'react'
import './ProductOptions.css'

function ProductOptions({ options, shape = 'square', type = 'text', radius = '4px' }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="product-options">
      {options.map((option) => {
        const style = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          ...(type === 'color' ? { background: option } : {}),
        }

        return (
          <button
            key={option}
            type="button"
            className={`option ${type} ${selected === option ? 'selected' : ''}`}
            style={style}
            onClick={() => setSelected(option)}
            aria-label={type === 'color' ? `Cor ${option}` : `Tamanho ${option}`}
          >
            {type === 'text' ? option : ''}
          </button>
        )
      })}
    </div>
  )
}

export default ProductOptions