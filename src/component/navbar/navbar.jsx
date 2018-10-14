import React from 'react';
import { Navbar , Nav, NavItem } from 'react-bootstrap';
import Logo from './images/Asset 1.png';
import './navbar.css';
const navbar = props => (
<header>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img src={Logo} alt="Pro-Managment" className="fixed_img" ></img></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        Project
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
</header>
);

export default navbar;