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
import CartList from "./pages/CartList/CartList"


const App = () => {

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/selected/:id" element={<CardPage/>} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/shopping" element={<ShopPage />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}

export default App
