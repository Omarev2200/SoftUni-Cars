import React  from 'react';
import { BrowserRouter as Router,  Switch,  Route, } from "react-router-dom";
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import CreatePost from './components/create-post';
import Details from './components/details';
import NoMatch from './components/no-match';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data'





function App(props) {
  
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home products={data}/>
          </Route>
          <Route exact path="/login" component={Login}/>
          <Route  path="/register" component={Register}/>
          <Route  path="/details" component={Details}/>
          <Route  path="/create" component={CreatePost}/>
          <Route  component={NoMatch}/>
        </Switch>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
