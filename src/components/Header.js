import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar className="rb-main-color" sticky="top">
        <div className="container-fluid">
          <Navbar.Brand href="#home" className="rb-main-color">
            <img
              src="/roy.jpg"
              width="53"
              height="39"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span>Royal Beauty</span>
          </Navbar.Brand>
          <NavItem>
            <Button className="rb-main-color" variant="link">
              <span className="fa fa-user fa-2x "></span>
            </Button>
          </NavItem>
        </div>
      </Navbar>
    );
  }
}

export default Header;
