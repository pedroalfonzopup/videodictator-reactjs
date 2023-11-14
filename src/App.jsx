import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import MyNavbar from './components/MyNavbar/MyNavbar'
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import CategoryPage from "./pages/CategoryPage/CategoryPage"
import CardPage from "./pages/CardPage/CardPage"
import MyFooter from "./components/MyFooter/MyFooter"
import ShopPage from "./pages/ShopPage/ShopPage"
import { CartContextProvider } from "./context/cartContext"
import CartContainer from './components/CartContainer/CartContainer';


const App = () => {

  return (
    <CartContextProvider>
      <Router>
        <div className="body-all">
          <MyNavbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/selected/:id" element={<CardPage/>} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/shopping" element={<ShopPage />} />
              <Route path="/cart" element={<CartContainer />}/>
            </Routes>
          <MyFooter />
        </div>
      </Router>
    </CartContextProvider>
  )
}

export default App
