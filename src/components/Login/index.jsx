import React from 'react';
// import {UserConsumer } from '../contexts/user-context'
import './style.css';

import userService from '../services/user-service';

class Login extends React.Component {
    constructor(props) {
      super(props)

      this.state= {
        username:'',
        password:'',
        error: null
      }
    }
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;

    const data = {
      username,
      password,
      user:null
    }

    userService.login(data).then(data => {
      
      localStorage.setItem('username',username)
      // updateUser({username})
      
      this.props.history.push('/'); 
    
      
    })
    .catch(err =>{
      this.setState({error: err})
    })
  }

  render() {
    const {error} = this.state
    const {isLoggedIn} = this.props

    if (isLoggedIn) {
      React.render('/')
      this.props.history.push('/');
    }
    return (
      <main>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>Login</h1>
           {error?<div style={{ fontSize: 20, color: "red" }}>
            {error}
          </div>
          :null}
          <label >Username</label>
          <input 
          type="text" 
          name="username" 
          placeholder='*******'
          value={this.state.username}
          onChange={this.handleChange}
          ></input>

          <label htmlFor="usernmae">Password</label>
          <input 
          id="password" 
          name='password' 
          type="password" 
          placeholder="********"
          value={this.state.password}
          onChange={this.handleChange}
          ></input>

          <button type="submit">Login</button>
        </form>

      </main>

    )
  }
  
 
};


export default Login;