import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'
import './Header.css'

function Header() {
  const [busca, setBusca] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(`/products?filter=${encodeURIComponent(busca)}`)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className='container'>
      <div className="header-top">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Link to="/" className="header-logo">
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

      {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}

      <aside className={menuOpen ? 'mobile-menu open' : 'mobile-menu'} aria-label="Menu">
        <h3>Páginas</h3>
        <nav>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Produtos</NavLink>
          <NavLink to="/categories" onClick={closeMenu}>Categorias</NavLink>
          <NavLink to="/orders" onClick={closeMenu}>Meus Pedidos</NavLink>
        </nav>

        <div className="mobile-menu-bottom">
          <hr />
          <Link to="/login" className="login-button" onClick={closeMenu}>Entrar</Link>
          <Link to="/signup" className="signup-link" onClick={closeMenu}>Cadastre-se</Link>
        </div>
      </aside>
      </div>
    </header>
  )
}

export default Header