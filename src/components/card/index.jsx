import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'

function Card (props) {
  
  const {products} = props;
  const listItems = products.map((car) => 
        
        <div className="card" key={car.id}>
              <img src={car.imgUrl} alt={car.title} />
              <h5>{car.title}</h5>
              <p className="price">{car.price}</p>
              <p>{car.description}</p>
              <p><button><Link to="/details">Details</Link></button></p>
        </div>
      
        )
    return(
      <div className='conteiner-card'>
              {listItems}
      </div>
     
    )
}

export default Card;