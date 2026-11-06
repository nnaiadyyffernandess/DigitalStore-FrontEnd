import starIcon from '../../assets/star-icon.svg'
import './BuyBox.css'

function formatPrice(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <div className="buy-box">
      <h1>{name}</h1>
      <p className="buy-box-ref">{reference}</p>

            <div className="buy-box-rating">
        <span className="rating-badge">
          {stars}
          <img src={starIcon} alt="" />
        </span>
        <span className="rating-count">({rating} avaliações)</span>
      </div>

      <div className="buy-box-price">
        {priceDiscount ? (
          <>
            <span className="old-price">{formatPrice(price)}</span>
            <span className="current-price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="current-price">{formatPrice(price)}</span>
        )}
      </div>

      <p className="buy-box-description-title">Descrição do produto</p>
      <p className="buy-box-description">{description}</p>

      {children}

      <button type="button" className="buy-button">COMPRAR</button>
    </div>
  )
}

export default BuyBox