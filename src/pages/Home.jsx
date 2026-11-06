import Gallery from '../components/Gallery/Gallery'
import Section from '../components/Section/Section'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import ProductListing from '../components/ProductListing/ProductListing'
import { products } from '../data/products'
import './Home.css'

const slides = [
  {
    src: '/tenisbrancoevermelho.png',
    alt: 'Tênis Nike Air Force vermelho',
    rotate: -19.34,
    tag: 'Melhores ofertas personalizadas',
    title: 'Queima de stoque Nike 🔥',
    text: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    src: `/home-slide-${i + 1}.jpeg`,
  })),
]
const collections = [
  { id: 1, image: '/collection-1.png', title: 'Novo drop Supreme', discount: 30 },
  { id: 2, image: '/collection-2.png', title: 'Coleção Adidas', discount: 30 },
  { id: 3, image: '/collection-3.png', title: 'Novo Beats Bass', discount: 30 },
]

function Home() {
  return (
    <main>
      <Gallery images={slides} width="1440px" height="681px" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="collections">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products.slice(0, 8)} />
      </Section>
    </main>
  )
}

export default Home