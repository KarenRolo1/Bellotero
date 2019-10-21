import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import bellotero from '../../assets/images/bellotero.svg'
import { connect } from 'react-redux';
import './styles.scss';

const Header = (props) => {
  let menuItems = props.menuData.data.items;
    return(
      <Navbar className="header" expand="lg">
       <div className="container">
        <Navbar.Brand href="#home">
          <img alt="" src={bellotero} className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {(menuItems) ? menuItems.map((item, i)=>{
              return(
                <Nav.Link href={"/"+item.route+""}>{item.text}</Nav.Link>
              )
            }): ''}
          </Nav>
        </Navbar.Collapse>
        </div> 
      </Navbar>
    )
}
function mapStateToProps(state) {
  return {
    menuData: state.menuData
  }
}

export default connect(mapStateToProps, null)(Header);