import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./MyNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ShoopingCart from '../ShoopingCart/ShoopingCart';
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div className="navbar-container">
      <Navbar className='navbar-items_container'>
        <Link to="/">
          <Container>
            <Navbar.Brand>VIDEO DICTATOR</Navbar.Brand>
          </Container>
        </Link>
        <div className='navbar-list_container'>
            <ul className='navbar-list'>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <li>
                Categories
                <ul>
                  <Link to="/category/Alive">
                  <li>Alive</li>
                  </Link>
                  <Link to="/category/Dead">
                  <li>Dead</li>
                  </Link>
                  <Link to="/category/unknown">
                  <li>Unknown</li>
                  </Link>
                </ul>
              </li>
            </ul>
        </div>
      </Navbar>
      <div className="cart-container">
          <ShoopingCart />
      </div>
    </div>
  );
}

export default MyNavbar;