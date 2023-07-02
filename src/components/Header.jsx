import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Priyo Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link><FaShoppingCart size={20} style={{marginRight:'10px'}}/>Cart</Nav.Link></LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link><FaUser size={20} style={{marginRight:'10px'}}/>Sign In</Nav.Link>
           </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header