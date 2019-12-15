import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logaout'
import Register from './components/register/register';
import CreatePost from './components/create-post';
import MyAdCars from './components/my-ad-cars/my-ad-cars';
import Details from './components/details';
import Edit from './components/edit'
import Delete from './components/delete/delete'
// import SearchResult from './components/search/search-result'
import NoMatch from './components/no-match';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store, { StoreContext } from "./components/Store/Store";
import { loginSuccess } from "./components/Store/actions";



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
                  <Route exact path="/" render={(props) =>(<Home {...props}user={user}/>)}/>
                  
                  <Route exact path="/login" render={(props) =>(<Login {...props} isLogged={isLogged}/>)} />
                  <Route exact path="/logout" component={Logout}/>
                  {/* <Route exact path="/search" component={SearchResult}/> */}
                  <Route exact path="/details/:id" render={(props) =>(<Details {...props} isLogged={isLogged} user={user}/>)} />
                  <Route exact path="/register" render={(props) =>(<Register  {...props} isLogged={isLogged}/>)} />

                  
                  {isLogged &&(
                    <Route exact path="/create" render={(props) =>(<CreatePost {...props} isLogged={isLogged}/>)} />    
                  )}
                  {isLogged &&(
                    <Route exact path="/my-ad-cars/:id" render={(props) =>(<MyAdCars {...props}user={user}/>)} />    
                  )}

                  {isLogged &&(
                     <Route exact path="/edit/:id" component={Edit} />
                  )}
                 
                  {isLogged &&(
                    <Route exact path="/delete/:id" component={Delete} />
                  )}
                  
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
