import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../components/FilterGroup/FilterGroup'
import ProductListing from '../components/ProductListing/ProductListing'
import { products } from '../data/products'
import './ProductListingPage.css'

const marcas = [
  { text: 'Adidas', value: 'adidas', checked: true },
  { text: 'Balenciaga', value: 'balenciaga' },
  { text: 'K-Swiss', value: 'k-swiss', checked: true },
  { text: 'Nike', value: 'nike' },
  { text: 'Puma', value: 'puma' },
]

const categorias = [
  { text: 'Esporte e lazer', value: 'esporte', checked: true },
  { text: 'Casual', value: 'casual' },
  { text: 'Utilitário', value: 'utilitario' },
  { text: 'Corrida', value: 'corrida' },
]

const generos = [
  { text: 'Masculino', value: 'masculino', checked: true },
  { text: 'Feminino', value: 'feminino' },
  { text: 'Unissex', value: 'unissex' },
]

const estados = [
  { text: 'Novo', value: 'novo', checked: true },
  { text: 'Usado', value: 'usado' },
]

function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const busca = searchParams.get('filter')

  return (
    <main className="listing-page">
      <div className="listing-top">
        <p className="listing-title">
          {busca ? <>Resultados para “<strong>{busca}</strong>”</> : 'Todos os produtos'}
          {' '}- {products.length} produtos
        </p>

        <select className="listing-sort" defaultValue="relevantes">
          <option value="relevantes">Ordenar por: mais relevantes</option>
          <option value="menor">Ordenar por: menor preço</option>
          <option value="maior">Ordenar por: maior preço</option>
        </select>
      </div>

      <div className="listing-content">
        <aside className="listing-filters">
          <h3>Filtrar por</h3>
          <hr />
          <FilterGroup title="Marca" name="marca" options={marcas} />
          <FilterGroup title="Categoria" name="categoria" options={categorias} />
          <FilterGroup title="Gênero" name="genero" options={generos} />
          <FilterGroup title="Estado" name="estado" inputType="radio" options={estados} />
        </aside>

        <ProductListing products={products} columns={3} />
      </div>
    </main>
  )
}

export default ProductListingPage