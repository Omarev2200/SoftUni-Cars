import React from 'react';
import * as yup from 'yup';

import './style.css';

let schema = yup.object({
  email:yup.string().email(),

  username:yup.string('Username shoud be a string')
  .required('Username is required')
  .min(4,'Username should be more than 4 chars'),

  password:yup.string('Password shoud be a string')
  .required('Password is required')
  .min(6,'Password should be more than 6 chars'),

  repeatPassword:yup.string('Password shoud be a string')
  .oneOf([yup.ref('password'),null], 'Password dont\'t match')
  .required('Password is required')
  .min(6,'Password should be more than 6 chars'),
})



class Register extends React.Component {
  
  constructor(props) {
    
    super(props)
    
    this.state = {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
      errors: undefined
      
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
    schema.validate(this.state,{abortEarly: false})
    .then(()=> {
      this.setState(
        { errors: undefined }
      )
    })
    .catch(err => {
      const errors = err.inner.reduce((acc, { path, message }) => {
        acc[path] = (acc[path] || []).concat(message);
        return acc;
      }, {});
      this.setState({ errors });
    }) || Promise.resolve();
    
    const { email, password, repeatPassword, username,errors} = this.state;
    
    const user = {
      email,
      username,
      password,
      repeatPassword
    };
    if (!!errors) { return; }
    
    fetch('http://localhost:9999/api/user/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    )
    .then(res => res.json())
            
      .then(() => {
          this.props.history.push('/login');
        }
      )

    event.preventDefault();
  }
  
  getFirstControlError = name => {
    const errorState = this.state.errors
    return errorState && errorState[name] && errorState[name][0];
  };
  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const rePasswordError = this.getFirstControlError('repeatPassword');
    const emailError = this.getFirstControlError('email');

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
          {emailError && <div className="error">{emailError}</div>}
          <label htmlFor="name"><b>Username</b></label>
          <input
            type="text"
            name="username"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          {usernameError && <div className="error">{usernameError}</div>}

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
          {passwordError && <div className="error">{passwordError}</div>}

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
          {rePasswordError && <div className="error">{rePasswordError}</div>}

          <button type="submit">Register</button>
        </form>
      </main>

    );
  }
};




export default Register;