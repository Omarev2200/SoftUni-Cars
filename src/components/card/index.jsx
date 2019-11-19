import React from 'react';

import './styles.css'

function Card (props) {
  console.log(props)
  const {products} = props;
  const listItems = products.map((car) => 
        
        <div className="card" key={car.id}>
              <img src={car.imgUrl} alt={car.title} style={{width:'100%'}}/>
              <h5>{car.title}</h5>
              <p className="price">{car.price}</p>
              <p>{car.description}</p>
              <p><button>Ditels</button></p>
        </div>
      
        )
    return(
      <div className='conteiner'>
              {listItems}
      </div>
     
    )
}

export default Card;