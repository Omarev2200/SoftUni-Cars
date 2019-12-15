import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../search'
import styles from '../../styles.module.css';


function Navigation ({isLogged, user}) {
      
// console.log(user);

    return (
    <div className={styles["custom-padding"]}>
      <nav>
        <div className={styles.logo}>SoftUni Cars</div>
        <Search />

        <ul className={styles["menu-area"]}>
          <li><Link to="/">Home</Link></li>
          
          {isLogged && <li><Link to={`/my-ad-cars/${user._id}`}>My Ad Cars</Link></li>}
          {isLogged && <li><Link to="/create">Create Post</Link></li>}
          {isLogged && <li><Link to="#">{user && user.username}</Link></li>}
          {isLogged && <li><Link to="/logout">Logout</Link></li>}
          {!isLogged &&<li><Link to="/login">Login</Link></li>}
          {!isLogged &&<li><Link to="/register">Register</Link></li>}

        </ul>
      </nav>
    </div>
  );
  }
  
export default Navigation;