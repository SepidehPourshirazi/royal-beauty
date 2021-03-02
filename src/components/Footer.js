import React, { Component } from "react";
import { Container, Row, Col, Nav, Link } from "react-bootstrap";

class Rfooter extends Component {
  render() {
    return (
      <div className="rb-main-color">
        <Container>
          <Row>
            <Col>
              <div>
                <div className="mt-5 mb-2">
                  <b>CUSTOMER CARE</b>
                </div>
                <p>
                  <i className="fa fa-envelope fa-lg"></i>{" "}
                  customercare@royalbeauty.com
                </p>
                <p>
                  <i className="fa fa-phone fa-lg"></i> +852 1234 5678
                </p>
              </div>
            </Col>
            <Col>
              <div className="row justify-content-center">
                <div className="">
                  <ul className="list-unstyled " id="footer-menu">
                    <li className="rb-main-color">
                      <Nav.Link className="rb-main-color mt-5" to="/Home">
                        Home
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="rb-main-color" to="/About">
                        About RoyalBeauty
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="rb-main-color" to="/Contact">
                        Contact Us
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="mt-5 follow ">
                <b>FOLLOW US</b>
              </div>
              <br />
              <div className="rb-footer-social">
                <a
                  className="btn btn-social-icon btn-facebook mr-1 rb-main-color"
                  to="http://www.facebook.com/profile.php?id="
                >
                  <span className="fa fa-facebook"></span>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin mr-1 rb-main-color"
                  to="http://www.linkedin.com/in/"
                >
                  <span className="fa fa-linkedin"></span>
                </a>

                <a
                  className="btn btn-social-icon  btn-google mr-1 rb-main-color"
                  to="http://youtube.com/"
                >
                  <span className="fa fa-youtube"></span>
                </a>
                <a className="btn btn-social-icon rb-main-color">
                  <span className="fa fa-instagram"></span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Rfooter;
