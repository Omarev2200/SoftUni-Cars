import React from 'react';
import './style.css';
import withForm from '../hocs/withForm';
import userService from '../services/user-service';




class Login extends React.Component {

  usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

  submitHandler = () => {
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();
    this.props.login(this.props.history, data);
  }

  render() {
    return (

      <main>


        <form className='login-form' >
          <h1>Login</h1>


          <label >Username</label>
          <input 
          type="text" 
          name="username" 
          placeholder='*******'
          onChange={this.usernameChangeHandler}
          ></input>


          <label htmlFor="usernmae">Password</label>
          <input 
          id="password" 
          name='password' 
          type="password" 
          placeholder="********"
          onChange={this.passwordChangeHandler}
          ></input>

          <button type="button" onClick={this.submitHandler}>Login</button>
        </form>

      </main>



    )
  }
 
};

export default withForm(Login, { username: '', password: '' });