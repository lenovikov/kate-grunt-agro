import { Outlet } from 'react-router-dom'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
