import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../search'
import styles from '../../styles.module.css';

function Navbar({ user }) {
  return (
    <div className={styles["custom-padding"]}>
      <nav>
        <div className={styles.logo}>SoftUni Cars</div>
        <Search/>

        <ul className={styles["menu-area"]}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {
            localStorage.email?
              <React.Fragment>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="#">{localStorage.email}</Link></li>
                <li><Link to="/logout">Logout</Link></li>

              </React.Fragment>
              
              :
              <React.Fragment>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>

              </React.Fragment>
              
            }

          }


        </ul>
      </nav>
    </div>
  );
}

export default Navbar;