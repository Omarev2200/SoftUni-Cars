import React from 'react';
import { Redirect } from "react-router-dom";
import './style.css';


import userService from '../services/user-service'


const initialState = {
  username: "",
  password: "",
  rePassword: "",
  usernameError: "",
  passwordError: "",
  rePasswordError: "",
};

class Register extends React.Component {

  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  validate = () => {
    let usernameError = "";
    let passwordError = "";
    let rePasswordError = "";

    if (this.state.username.length < 5 ) {
      usernameError = "Username should be more than 5 chars";
    }
  
    if (this.state.password.length < 5 ) {
      passwordError = "Password must be more than 5 chars";
    }

    if (this.state.rePassword.length < 5 ) {
      rePasswordError = "Password must be more than 5 chars";
    }

    if (this.state.password !== this.state.rePassword ) {
      rePasswordError = "Passwords do not match";
    }
    

    if (usernameError || passwordError || rePasswordError) {
      this.setState({ usernameError, passwordError, rePasswordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    // console.log(isValid);
    if (isValid) {
      const {username,password} = this.state;

      const data = {
        username,
        password
      }
      userService.register(data).then(() => {
        return <Redirect to="/login" />;
      });
      // clear form
      this.setState(initialState);
    }
  };



  render() {
    const {isLogged} = this.props

    if (isLogged) {
      
      return <Redirect to="/" />;
    }

    return (<main>

      <form className='register-form' onSubmit={this.handleSubmit}>
        <h1>Register</h1>

        <label htmlFor="name"><b>Username</b></label>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        
          <div style={{ fontSize: 20, color: "red" }}>
            {this.state.usernameError}
          </div>
        

        <label htmlFor="usernmae">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="******"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        
          <div style={{ fontSize: 20, color: "red" }}>
            {this.state.passwordError}
          </div>
        
        

        <label htmlFor="repeat-password">Repeat Password</label>
        <input
          id="repeat-password"
          type="password"
          name="rePassword"
          placeholder="******"
          value={this.state.rePassword}
          onChange={this.handleChange}
          required
        />
        <div style={{ fontSize: 20, color: "red" }}>
            {this.state.rePasswordError}
          </div>

        <button type="submit">Register</button>
      </form>
    </main>)
  };

};



export default Register;