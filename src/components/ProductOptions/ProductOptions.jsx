import { useState } from 'react'
import './ProductOptions.css'

function ProductOptions({ options, shape = 'square', radius = '4px', type = 'text' }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="product-options">
      {options.map((option) => {
        const style = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          ...(type === 'color' ? { backgroundColor: option } : {}),
        }

        return (
          <button
            key={option}
            type="button"
            className={`option ${shape} ${type}${selected === option ? ' selected' : ''}`}
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