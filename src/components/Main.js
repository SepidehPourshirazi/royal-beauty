import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}
export default Main;
