import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ProductListingPage from './pages/ProductListingPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  )
}

export default App