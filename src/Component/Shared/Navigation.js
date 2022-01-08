import React from 'react';
import { Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import img from '../../img/logo.png'
const Navigation = () => {
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"> <img className='img'  src={img}/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      {/* <div className='home text-white'> 
      <Nav.Link href="home"> </Nav.Link >
      </div> */}

        <div className='search'>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-5 "
          aria-label="Search"
        />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>

        </div>
        
        
        <button>Join Now</button>
      </Nav>
    
      {/* {/* <Nav.Link href="#action2">Login </Nav.Link> */}
       */}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;