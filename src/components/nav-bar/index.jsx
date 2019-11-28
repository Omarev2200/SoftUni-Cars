import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../search'
import styles from '../../styles.module.css';

function Navbar({isLogged}) {
  
  return (
    <div className={styles["custom-padding"]}>
      <nav>
        <div className={styles.logo}>SoftUni Cars</div>
        <Search />

        <ul className={styles["menu-area"]}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLogged && <li><Link to="/create">Create Post</Link></li>}
          {isLogged && <li><Link to="#">{localStorage.username}</Link></li>}
          {isLogged && <li><Link to="/logout">Logout</Link></li>}
          {!isLogged &&<li><Link to="/login">Login</Link></li>}
          {!isLogged &&<li><Link to="/register">Register</Link></li>}

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;