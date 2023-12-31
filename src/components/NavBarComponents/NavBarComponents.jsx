
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from "react-router-dom"

const NavBarComponents = () => {

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Link to="/" className='text-3xl font-semibold'>NABMW</Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto">
            <Link to="/" className='text-lg font-semibold mt-2 mr-5'>Home</Link>
            
            <Link href="#link" className='text-lg font-semibold mt-2 mr-5'>Contact</Link>

            <Link to="/nosotros" className='text-lg font-semibold mt-2 mr-4'>About Us</Link>

            <NavDropdown className='text-lg font-semibold text-black' title="Categories" id="basic-nav-dropdown" >
              
              <li><Link className="dropdown-item" to={"/productos/1"}>Coupé</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to={"/productos/2"}>Sedán</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to={"/productos/3"}>4X4</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to={"/productos/4"}>De lujo</Link></li>
              
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent/>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBarComponents;