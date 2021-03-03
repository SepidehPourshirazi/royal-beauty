import React, { Component } from "react";
// import { baseUrl } from "../shared/baseUrl";
import { Button, Carousel, CarouselItem, Container } from "react-bootstrap";

class Jumbotron extends Component {
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="images/jumbotron/0.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="images/jumbotron/4.jpg"
              alt="Second slide"
            />

            {/* </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="images/jumbotron/2.jpg"
            alt="Third slide"
          /> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
export default Jumbotron;
