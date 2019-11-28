import React from 'react';
import * as yup from 'yup';

import './style.css';
import withForm from '../hocs/withForm';
import userService from '../services/user-service';


class Register extends React.Component {

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

  submitHandler = (event) => {
    event.preventDefault();
    this.props.runValidations()
      .then(formData => console.log(formData));

    const data = this.props.getFormState();
    userService.register(data).then(() => {
      
      
      this.props.history.push('/login');
    });
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const rePasswordError = this.getFirstControlError('rePassword');

    return <main>

    <form className='register-form' onSubmit={this.submitHandler}>
      <h1>Register</h1>

      <label htmlFor="name"><b>Username</b></label>
      <input
        type="text"
        name="username"
        placeholder="Enter Name"
        
        onChange={this.usernameOnChangeHandler}
        required
      />
      {usernameError && <div className="error">{usernameError}</div>}

      <label htmlFor="usernmae">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="******"
        
        onChange={this.passwordOnChangeHandler}
        required
      />
      {passwordError && <div className="error">{passwordError}</div>}

      <label htmlFor="repeat-password">Repeat Password</label>
      <input
        id="repeat-password"
        type="password"
        name="rePassword"
        placeholder="******"
        
        onChange={this.rePasswordOnChangeHandler}
        required
      />
      {rePasswordError && <div className="error">{rePasswordError}</div>}

      <button type="submit">Register</button>
    </form>
  </main>
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

const initialFormState = {
  username: '',
  password: '',
  rePassword: ''
};

const schema = yup.object({
    
  
    username:yup.string('Username shoud be a string')
    .required('Username is required')
    .min(4,'Username should be more than 4 chars'),
  
    password:yup.string('Password shoud be a string')
    .required('Password is required')
    .min(6,'Password should be more than 6 chars'),
  
    rePassword:yup.string('Password shoud be a string')
    .oneOf([yup.ref('password'),null], 'Password dont\'t match')
    .required('Password is required')
    .min(6,'Password should be more than 6 chars'),
  });


export default withForm(Register, initialFormState, schema)