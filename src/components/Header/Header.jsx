import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'
import './Header.css'

function Header() {
  const [busca, setBusca] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/products?filter=${encodeURIComponent(busca)}`)
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <Logo src={logoHeader} />
        </Link>

        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link to="/signup" className="signup-link">Cadastre-se</Link>
          <Link to="/login" className="login-button">Entrar</Link>
          <img src={miniCart} alt="Carrinho de compras" />
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/categories">Categorias</NavLink>
        <NavLink to="/orders">Meus Pedidos</NavLink>
      </nav>
    </header>
  )
}

export default Header