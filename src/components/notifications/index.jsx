import React from 'react';
import './styles.css';

function Notifications ({messages}) {
console.log(messages)
    return(
         <section className="notifications">
            <p className="notification-message">{messages}</p>
         </section>
    )

}

export default Notifications;