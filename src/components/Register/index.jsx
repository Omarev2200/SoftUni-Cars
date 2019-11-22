import React from 'react';
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom'; 


import './style.css';


class Register extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
      registrationErrors: [],
      user: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }
  
  handleSubmit(event) {
    console.log(this.props.history)
    const { email, password, repeatPassword, name } = this.state;

    const user = {
      email,
      name,
      password,
      repeatPassword
    };

    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    )
      .then(res => res.json())
      .then(data => {

        if (data.errors) {
          data.errors.forEach(error => {
            this.setState({
              registrationErrors: error.msg
            })
            console.log(error.msg)
          })
        } else {
          console.log(data)
          localStorage.setItem('username', data.username);
          localStorage.setItem('userId', data.userId);

          this.props.history.push('/login');
        }
      })

    event.preventDefault();
  }

  render() {

    return (

      <main>

        <form className='register-form' onSubmit={this.handleSubmit}>
          <h1>Register</h1>


          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="name"><b>Name</b></label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

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

          <label htmlFor="repeat-password">Repeat Password</label>
          <input
            id="repeat-password"
            type="password"
            name="repeatPassword"
            placeholder="******"
            value={this.state.repeatPassword}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </main>

    );
  }

  componentWillMount() {
    const localUsername = localStorage.getItem('username');
    if (localUsername) {
      this.setState({
        user: localUsername
      })
    }
  }

}

export default Register;