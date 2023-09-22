import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ShoopingCart from '../ShoopingCart/ShoopingCart';

const MyNavbar = () => {
  return (
    <div className="navbar-container">
      <Navbar className='navbar-items_container'>
        <Container>
          <Navbar.Brand>VIDEO DICTATOR</Navbar.Brand>
        </Container>
        <div className='navbar-list_container'>
            <ul className='navbar-list'>
              
                <li><a className='dalelococortala' href="*">Inicio</a></li>
                <li><a className='dalelococortala' href="*">Nosotros</a></li>
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