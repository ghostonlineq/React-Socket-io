import React, { Component } from "react";
import "./App.css";
// Router
import { BrowserRouter, Route, Link, Router, Redirect } from "react-router-dom";
import { Nav,Navbar,NavDropdown } from "react-bootstrap";

//import Components and Pages
import Test from "./components/test";
import Home from "./components/Home";
import TestM from "./components/testM";
class App extends Component {
  render() {
    return (
      

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Test} />
        <Route path="/TestM" component={TestM} />
      </div>
    );
  }
}
export default App;
