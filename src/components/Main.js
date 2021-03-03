import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Home from "../pages/Home";
import Footer from "./Footer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFragrances } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    fragrances: state.fragrances,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFragrances: () => {
    dispatch(fetchFragrances());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchFragrances();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          fragrances={this.props.fragrances.fragrances.filter(
            (f) => f.bestseller
          )}
          fragrancesLoading={this.props.fragrances.isLoading}
          fragrancesErrMess={this.props.fragrances.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <Navbar />
        <Jumbotron />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
