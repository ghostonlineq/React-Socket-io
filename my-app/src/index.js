// eslint-disable-next-line
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
// import Test from './component/test'
// import Home from './component/Home'
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import { Nav,Navbar,NavDropdown } from "react-bootstrap";


render(
  
  <BrowserRouter>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Web Test</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://react-bootstrap.github.io/">Download</Nav.Link>
      <Nav.Link href="https://react-bootstrap.github.io/getting-started/introduction/">Tutorial</Nav.Link>
      <NavDropdown title="Infomation" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Event</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Q&A</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contack Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/register"> Register </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
