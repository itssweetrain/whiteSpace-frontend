import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Nav from './Components/Nav/Nav';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import TopButton from './Components/TopButton/TopButton';
import Popup from './Components/Nav/Popup';
import Footer from './Components/Footer/Footer';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          {/*
          <Route exact path="/" component={Nav} />
          {/* <Route exact path="/products" component={ProductDetail} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/products" component={CategoryProduct} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <TopButton />
        <Footer />
      </Router>
    );
  }
}
