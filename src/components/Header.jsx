import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  // to access the state value
  const wishlist= useSelector((state)=>state.wishlistReducer)
  // console.log(wishlist);
  const Cart = useSelector((state)=>state.cartReducer)
  console.log(Cart);
  return (
    <Navbar expand="lg" className="bg-primary fixed-top ">
    <Container>
      <Navbar.Brand href="#home"><Link to='/' style={{textDecoration:'none' , color:'white'}}> <i class="fa-solid fa-cart-shopping fa-beat-fade"></i> E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2'><Link to='/cart' style={{textDecoration:'none' , color:'white'}}><i class="fa-solid fa-cart-shopping text-warning me-2"></i> Cart <Badge bg="info" className='rounded ms-2 '>{Cart.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2' ><Link to='/wishlist' style={{textDecoration:'none' , color:'white'}}><i class="fa-solid fa-heart text-danger me-2"></i> Wishlist <Badge bg="info" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header