import React from 'react';
import { Redirect } from "react-router-dom";
// import { StoreContext } from '../Store/Store';
// import { login } from '../Store/actions';
import './style.css';

import userService from '../../services/user-service';

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
    // const { state, dispatch } = React.useContext(StoreContext);
    e.preventDefault();
    const {username, password} = this.state;

    const data = {
      username,
      password,
      
    }

    userService.login(data).then(data => {
      console.log(data);
      
      if (data === 'Invalid username or password') {
        this.setState({error: data})
        return;
    } else {
        
     
  window.location.href = '/'
    }
      // dispatch(login(data));
      // 
      
    
      
    })
    .catch(err =>{
      
      
      this.setState({error: err})
    })
  }

  render() {
    const {error} = this.state
    const {isLogged} = this.props

    if (isLogged) {
      
      return <Redirect to="/" />;
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