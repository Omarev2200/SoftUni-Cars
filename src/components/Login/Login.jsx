import React from 'react';


import style from '../../styles.module.css';


function Login() {
  return (
   
     <main>
    

        <form>
            <h1>Login</h1>

            
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" ></input>


            <label for="usernmae">Password</label>
            <input id="password" type="password" placeholder="********"></input>

            <button type="submit">Login</button>
        </form>
        
    </main>
   
     

  );
}

export default Login;