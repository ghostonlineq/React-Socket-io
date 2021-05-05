// import logo from './logo.svg';
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import Axios from "axios";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { data, error } from "jquery";
import http from "../http-common";

// function SetData() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [titlename, setTitlename] = useState("");
// }

class Test extends Component {
  constructor(props) {
    super(props);
    this.changeInput.bind(this);
    this.Summit.bind(this);
    this.getDataGender.bind(this);
    this.getDataTitle.bind(this);
    this.getDataStatus.bind(this);
    this.state = {
      title: [],
      Status: [],
      Gender: [],
        name: "",
        password: "",
        email: "",
        phone: "",
        titlename: "",
        status: "",
        gender: "",
      
    };

  }

  changeInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  componentDidMount = () => {
    this.getDataTitle();
    this.getDataStatus();
    this.getDataGender();
    // this.Summit();
  };

  getDataTitle = async () => {
    var res = await http.get("/titlename");
    // console.log("Titelname", res.data);
    // this.state.title = res.data;
    console.log("Titelname", res.data);
    this.setState({ title: res.data });
  };

  getDataStatus = async () => {
    var res = await http.get("/status");
    // console.log("Titelname", res.data);
    // this.state.title = res.data;
    console.log("Status", res.data);
    this.setState({ Status: res.data });
  };

  getDataGender = async () => {
    var res = await http.get("/gender");
    // console.log("Titelname", res.data);
    // this.state.title = res.data;
    console.log("Gender", res.data);
    this.setState({ Gender: res.data });
  };

  Summit = () => {
    const RegisterData = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      titlename: this.state.titlename,
      status: this.state.status,
    };
    console.log(RegisterData)
    http.post("/insert", RegisterData)

      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      this.setState({name: '',password: '',email: '',phone: '' ,gender: '', titlename: '', status: ''})
  };

  render() {
    const {
      name,
      password,
      email,
      phone,
      titlename,
      status,
      gender,
    } = this.state;
    const { title, Status, Gender } = this.state;
    return (
      <div className="App container">
        <h1>Register Page</h1>
        <div className="information">
          <form action="">
            <Card style={{ width: "1080px" }}>
              <Card.Body>
                {" "}
                <div className="mr-4">
                  <label htmlFor="name" className="form-label">
                    Name Enter
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.changeInput}
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mr-4">
                  <label htmlFor="password" className="form-label">
                    Password Enter
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeInput}
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mr-4">
                  <label htmlFor="Email" className="form-label">
                    Email Enter
                  </label>
                  <input
                    type="Email"
                    name="email"
                    value={email}
                    onChange={this.changeInput}
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mr-4">
                  <label htmlFor="phone" className="form-label">
                    Phone Enter
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.changeInput}
                    className="form-control"
                    placeholder="Enter Phone"
                  />
                </div>
                <div className="mr-4">
                  <label htmlFor="gender" className="form-label">
                    Select Gender
                  </label>
                  <select
                    className="form-control"
                    name="gender"
                    placeholder="Choose Gender"
                    value={gender}
                    onChange={this.changeInput}
                  >
                  <option>Select Gender</option>
                    {Gender.map((g) => (
                      <option value={g.id}>{g.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mr-4">
                  <label htmlFor="status" className="form-label">
                    Select Status
                  </label>
                  <select
                    className="form-control"
                    name="status"
                    placeholder="Choose Status"
                    value={status}
                    onChange={this.changeInput}
                  >
                  <option>Select Status</option>
                    {Status.map((s) => (
                      <option value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mr-4">
                  <label htmlFor="titlename" className="form-label">
                    Select Title name
                  </label>
                  <select
                    className="form-control"
                    placeholder="Choose Titlename"
                    name="titlename"
                    value={titlename}
                    onChange={this.changeInput}
                  >
                  <option>Select Title-Name</option>
                    {title.map((option) => (
                      <option value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>
              </Card.Body>
            </Card>
            <p />
            <Button variant="success" onClick={this.Summit}>
              Summit
            </Button>{" "}
            <Button variant="secondary">Clear</Button>{" "}
            <Button variant="secondary" href="/">
              Back to Home Page
            </Button>{" "}
          </form>
        </div>
      </div>
    );
  }
}
export default Test;
