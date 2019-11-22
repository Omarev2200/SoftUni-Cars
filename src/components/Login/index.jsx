import React from 'react';


import  './style.css';


class Login extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      email: "",
      name: "",
      password: "",
      registrationErrors: [],
      user: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }

  handleSubmit(event) {
    const { email, password} = this.state;
    
    const user = {
      email,
      password,
      
    };
    
    fetch('http://localhost:8080/auth/signin', {
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
            registrationErrors:error.msg
          })
          console.log(error.msg)
        })
      }else {
        console.log(data)
          localStorage.setItem('Authorization',data.token);
          localStorage.setItem('userId',data.userId);
          localStorage.setItem('email',data.email);
          this.props.history.push('/');

      }
    })
    
    event.preventDefault();
  }
  render() {
    return (

      <main>


        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>Login</h1>


          <label htmlFor="email"><b>Email</b></label>
          <input 
          type="text" 
          placeholder="Enter Email" 
          name="email" 
          value={this.state.email}
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
  componentWillMount() {
    const localUsername = localStorage.getItem('Authorization');
    if (localUsername) {
      this.setState({
        user:localUsername
      })
    }
  }
};

export default Login;