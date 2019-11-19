import React from 'react';


import './style.css';


class Register extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
      registrationErrors: ""
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
    const { email, password, repeatPassword, name} = this.state;
    
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
    .then(data => console.log(data))
    .catch(err => console.log(err))
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

}

export default Register;