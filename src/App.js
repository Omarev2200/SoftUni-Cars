import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/navigation';
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
import Store, { StoreContext } from "./components/Store/Store";
import { loginSuccess } from "./components/Store/actions";
import data from './data'


// function parseCookeis() {
//   return document.cookie.split('; ').reduce((acc, cookie) => {
//     const [cookieName, cookieValue] = cookie.split('=');
//     acc[cookieName] = cookieValue;
//     return acc;
//   }, {})
// }

const Auth = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch("http://localhost:9999/auth", { credentials: "include" })
      .then(res =>
        res.status === 200
          ? res.json()
          : res.text().then(text => Promise.reject(text))
      )
      .then(user => dispatch(loginSuccess(user)))
      .catch(() => {
        
        dispatch(loginSuccess(null));
      });
  }, []);

  return <>{children}</>;
};

const App =() => {
  return (
    <BrowserRouter>
    <Store>
      <Auth>
        <StoreContext.Consumer>
          {
            ({state})=>{
            
              const { user } = state;
              const isLogged = !!state.user;

              return user === undefined ? (
                <div>Loding...</div>
              ) :(
                
            <React.Fragment>
              <Navigation isLogged={isLogged} user={user} />
              <Switch>
                  <Route exact path="/">
                    <Home products={data} />
                  </Route>
                  <Route exact path="/login" component={Login} isLogged={isLogged} />
                  <Route path="/logout" component={Logout}/>
                  <Route path="/details/:id" component={Details} />
                  <Route path="/register" component={Register} />
                  <Route path="/create" component={CreatePost} />
                  <Route component={NoMatch} />
              </Switch>
              <Footer />  
            </React.Fragment>                      
              )
            }
          }
        </StoreContext.Consumer>
      </Auth>
    </Store>
    
    </BrowserRouter>
        


      );
    

  }

  export default App;
