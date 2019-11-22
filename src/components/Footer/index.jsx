import React from 'react';
import {Link} from 'react-router-dom';


import style from '../../styles.module.css';


function Footer() {
  return (
    <footer>
        <ul className={style.footer}>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/about"><li>Contact</li></Link>
            {/* <Link to="#"><li>User</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>          */}
        </ul>
        <p>SoftUni - Cars 2019 </p>
    </footer>
     

  );
}

export default Footer;