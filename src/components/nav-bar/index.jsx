import React from 'react';
import styles from'../../styles.module.css';

function Navbar () {
    return (
        <div className={styles["custom-padding"]}>
        <nav>
          <div className={styles.logo}>SoftUni Cars</div>
      
          <ul className={styles["menu-area"]}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">Username</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;