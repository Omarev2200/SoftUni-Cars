import React from 'react';


import style from '../../styles.module.css';


function Footer() {
  return (
    <footer>
        <ul className={style.footer}>
            <a href="/"> <li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="#"><li>User</li></a>
            <a href="/login"><li>Login</li></a>
            <a href="/register"><li>Register</li></a>         
        </ul>
        <p>SoftUni - Cars 2019 </p>
    </footer>
     

  );
}

export default Footer;