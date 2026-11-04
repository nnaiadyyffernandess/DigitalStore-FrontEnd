import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout