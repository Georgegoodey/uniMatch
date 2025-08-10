import './Nav.scss';
import React from 'react';
import nav from './nav.json';
import { Image } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

const NavNew = () => {

//   var colour;
//   switch(window.location.pathname) {
//     case "/blog":
//       colour = "purple"
//       break;
//     case "/canvas":
//       colour = "blue"
//       break;
//     default:
//       colour = "blue"
//   }

  return (
    <Navbar expand="lg" className={`text-light bg-blue bg-opacity-25`}>
      <Container>
        <Navbar.Brand href="\">
          <Image src={`${process.env.PUBLIC_URL}/icons/compass-solid.svg`} alt="home" style={{height:'3.5vh'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`bg-blueAccent bg-opacity-10 rounded-0`} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              nav.map((section, index) => 
                <Nav.Link href={section.link} className = {` ${window.location.pathname === section.link ? "" : "text-opacity-50"} text-light px-3 mx-2 my-2 nav-link`}>
                  <h4 className='mb-0'>{section.name}</h4>
                </Nav.Link>
              )
            }
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavNew;