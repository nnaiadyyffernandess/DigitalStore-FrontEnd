import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import BuyBox from '../components/BuyBox/BuyBox'
import ProductOptions from '../components/ProductOptions/ProductOptions'
import Section from '../components/Section/Section'
import ProductListing from '../components/ProductListing/ProductListing'
import { products } from '../data/products'
import './ProductPage.css'

const images = Array.from({ length: 5 }, (_, i) => ({ src: `/produc-image-${i + 1}.jpeg` }))
const sizes = ['39', '40', '41', '42', '43']
const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']

function ProductPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <main className="product-page">
        <p>Produto não encontrado.</p>
        <Link to="/products">Voltar para os produtos</Link>
      </main>
    )
  }

  return (
    <main>
      <div className="product-page">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> / Tênis / {product.name}
        </nav>

        <div className="product-main">
         <Gallery images={images} width="700px" height="570px" radius="4px" showThumbs />

          <BuyBox
            name={product.name}
            reference="Casual | K-Swiss | REF:38416711"
            stars={4.5}
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          >
            <div className="buy-box-section">
              <h4>Tamanho</h4>
              <ProductOptions options={sizes} />
            </div>

            <div className="buy-box-section">
              <h4>Cor</h4>
              <ProductOptions options={colors} type="color" shape="circle" />
            </div>
          </BuyBox>
        </div>
      </div>

      <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products.slice(0, 4)} />
      </Section>
    </main>
  )
}

export default ProductPage