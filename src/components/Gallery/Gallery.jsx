import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import './Gallery.css'

function toCss(value) {
  return typeof value === 'number' || /^\d+$/.test(value) ? `${value}px` : value
}

function Gallery({
  images,
  className = '',
  width = '100%',
  height = '570px',
  radius = '0px',
  showThumbs = false,
}) {
  const [current, setCurrent] = useState(0)

  const isFirst = current === 0
  const isLast = current === images.length - 1

  return (
    <div className={`gallery ${className}`} style={{ width: toCss(width) }}>
      <div
        className="gallery-main"
        style={{ height: toCss(height), borderRadius: radius }}
      >
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={() => setCurrent(current - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <div
          className="gallery-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              className={image.title ? 'gallery-slide with-caption' : 'gallery-slide'}
              key={image.src}
            >
              {image.title && (
                <div className="gallery-caption">
                  {image.tag && <span className="caption-tag">{image.tag}</span>}
                  <h2>{image.title}</h2>
                  {image.text && <p>{image.text}</p>}
                  {image.buttonText && (
                    <Link to={image.buttonLink || '/products'} className="caption-button">
                      {image.buttonText}
                    </Link>
                  )}
                </div>
              )}
                           <img
                src={image.src}
                alt={image.alt || `Imagem ${index + 1}`}
                style={image.rotate ? { transform: `rotate(${image.rotate}deg)` } : undefined}
              />
            </div>
          ))}
        </div>

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
              key={image.src}
              className={index === current ? 'thumb active' : 'thumb'}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery