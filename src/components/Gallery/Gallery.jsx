import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import './Gallery.css'

function Gallery({ images, width = '100%', height = '570px', radius = '4px', showThumbs = false }) {
  const [current, setCurrent] = useState(0)

  const isFirst = current === 0
  const isLast = current === images.length - 1

  return (
    <div className="gallery" style={{ width }}>
      <div className="gallery-main" style={{ height, borderRadius: radius }}>
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={() => setCurrent(current - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <img className="gallery-image" src={images[current]} alt={`Imagem ${current + 1}`} />

        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={() => setCurrent(current + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image}
              className={index === current ? 'thumb active' : 'thumb'}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery