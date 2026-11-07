import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../components/FilterGroup/FilterGroup'
import Section from '../components/Section/Section'
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
  const [ordem, setOrdem] = useState('menor')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const ordenados = [...products].sort((a, b) => {
    const precoA = a.priceDiscount ?? a.price
    const precoB = b.priceDiscount ?? b.price
    return ordem === 'menor' ? precoA - precoB : precoB - precoA
  })

  const titulo = busca
    ? `Resultados para “${busca}” - ${ordenados.length} produtos`
    : `${ordenados.length} produtos encontrados`

  return (
    <main className="listing-page container">
      <aside className="listing-side">
        <div className="listing-controls">
          <label className="listing-sort">
            <span>Ordenar por</span>
            <select value={ordem} onChange={(event) => setOrdem(event.target.value)}>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </label>

          <button
            type="button"
            className="filter-toggle"
            onClick={() => setFiltersOpen(true)}
            aria-label="Abrir filtros"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </button>
        </div>

        {filtersOpen && (
          <div className="filters-overlay" onClick={() => setFiltersOpen(false)} />
        )}

        <div className={filtersOpen ? 'listing-filters open' : 'listing-filters'}>
          <div className="filters-head">
            <h3>Filtrar por</h3>
            <button
              type="button"
              className="filters-close"
              onClick={() => setFiltersOpen(false)}
              aria-label="Fechar filtros"
            >
              ✕
            </button>
          </div>
          <hr />
          <FilterGroup title="Marca" name="marca" options={marcas} />
          <FilterGroup title="Categoria" name="categoria" options={categorias} />
          <FilterGroup title="Gênero" name="genero" options={generos} />
          <FilterGroup title="Estado" name="estado" inputType="radio" options={estados} />
        </div>
      </aside>

      <div className="listing-main">
        <Section title={titulo} titleAlign="left">
          <ProductListing products={ordenados} columns={3} />
        </Section>
      </div>
    </main>
  )
}

export default ProductListingPage