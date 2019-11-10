import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import style from './styles.module.css';



function App() {
  return (
    <React.Fragment>
      <Navbar/>
          <Main/>
      <Footer/>
    </React.Fragment>
      
    
  );
}

export default App;
