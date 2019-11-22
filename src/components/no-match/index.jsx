import React from 'react';

import style from '../../styles.module.css';





function NoMatch() {
  return (
   
     <main>
        <img src='https://cdn3.iconfinder.com/data/icons/pictomisc/100/sadface-512.png' alt="sad-face" class={style['sad-face']}></img>
		<h1 class={style['not-found']}>404 - Page Not Found</h1>     
    </main>
   
     

  );
}

export default NoMatch;