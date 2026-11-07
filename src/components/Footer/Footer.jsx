import Logo from '../Logo/Logo'
import FooterInfo from '../FooterInfo/FooterInfo'
import logoFooter from '../../assets/logo-footer.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import './Footer.css'

const informacao = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
]

const categorias = [
  { text: 'Camisetas', link: '/products' },
  { text: 'Calças', link: '/products' },
  { text: 'Bonés', link: '/products' },
  { text: 'Headphones', link: '/products' },
  { text: 'Tênis', link: '/products' },
]

const contato = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo src={logoFooter} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <FooterInfo title="Informação" informations={informacao} />
          <FooterInfo title="Categorias" informations={categorias} />
          <FooterInfo title="Contato" informations={contato} />
        </div>
      </div>

      <hr />
      <p className="footer-copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  )
}

export default Footer