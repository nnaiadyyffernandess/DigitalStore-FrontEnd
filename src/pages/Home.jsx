import Gallery from '../components/Gallery/Gallery'
import Section from '../components/Section/Section'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import ProductListing from '../components/ProductListing/ProductListing'
import { products } from '../data/products'
import './Home.css'

const slides = Array.from({ length: 8 }, (_, i) => `/home-slide-${i + 1}.jpeg`)

const collections = [
  { id: 1, image: '/collection-1.png', title: 'Novo drop Supreme' },
  { id: 2, image: '/collection-2.png', title: 'Coleção Adidas' },
  { id: 3, image: '/collection-3.png', title: 'Novo Beats Bass' },
]

function Home() {
  return (
    <main>
      <Gallery images={slides} height="400px" />

      <Section title="Coleções em destaque">
        <div className="collections">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products.slice(0, 8)} />
      </Section>
    </main>
  )
}

export default Home