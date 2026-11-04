import Gallery from '../components/Gallery/Gallery'
import Section from '../components/Section/Section'
import ProductListing from '../components/ProductListing/ProductListing'
import { products } from '../data/products'

const slides = Array.from({ length: 8 }, (_, i) => `/home-slide-${i + 1}.jpeg`)

function Home() {
  return (
    <main>
      <Gallery images={slides} height="400px" />

      <Section title="Produtos em alta" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products} />
      </Section>
    </main>
  )
}

export default Home