import React  from 'react';
import { BrowserRouter as Router,  Switch,  Route, } from "react-router-dom";
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logaout'
import Register from './components/register/register';
import CreatePost from './components/create-post';
import Details from './components/details';
import NoMatch from './components/no-match';
import 'bootstrap/dist/css/bootstrap.min.css';
import userService from '../src/components/services/user-service';
import data from './data'

function Main({ children, title }) {
  return (
    <div className="Main">
      {children}
    </div>
  );
}

function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}



class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data).then(() => {
      console.log(data)
      this.setState({ isLogged: true });
      history.push('/');
    });
  }
    
    render() {
      const { isLogged } = this.state;
      
      return (
    <Router>
      <Navbar isLogged={isLogged}/>
        <Switch>
          <Route exact path="/">
            <Home products={data}/>
          </Route>
          <Route exact path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
          <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />
          <Route  path="/details" component={Details}/>
          <Route  path="/register" component={Register}/>
          <Route  path="/create" component={CreatePost}/>
          <Route  component={NoMatch}/>
        </Switch>
      <Footer/>
    </Router>
      
    
  );
    }
  
}

export default App;
