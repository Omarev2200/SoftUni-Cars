import React  from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NoMatch from './components/NoMatch';





function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route  component={NoMatch}/>
        </Switch>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
