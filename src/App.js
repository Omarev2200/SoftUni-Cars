import React  from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register/index';
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
          <Route exact path="/register" component={Register}/>
          <Route  component={NoMatch}/>
        </Switch>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
