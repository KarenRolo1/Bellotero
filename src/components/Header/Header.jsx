import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import bellotero from '../../assets/images/bellotero.svg'

import './styles.scss';

const Header = () => {
    return(
      <Navbar className="header">
        <Navbar.Brand href="#home">
          <img alt="" src={bellotero} className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Solutions</Nav.Link>
            <Nav.Link href="#link2">Stories</Nav.Link>
            <Nav.Link href="#link3">Partners</Nav.Link>            
            <Nav.Link href="#link4">About</Nav.Link>
            <Nav.Link href="#link5">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header;