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
  FormControl,
  Form,
  Container,
} from "react-bootstrap";

class BNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar className="rb-navbar border-bottom">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">HOME</Nav.Link>
            <Nav.Link href="#Fragrance">FRAGRANCE</Nav.Link>
            <Nav.Link href="#Makeup">MAKEUP</Nav.Link>
            <Nav.Link href="#Skincare">SKINCARE</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" size="sm" />
            <Button className="rb-search" variant="link">
              <span className="fa fa-search fa-md "></span>
            </Button>
          </Form>
        </Navbar>
        <br />
      </Container>
    );
  }
}
export default BNavbar;
