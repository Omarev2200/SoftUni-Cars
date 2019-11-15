import React from 'react';



import './styles.css'




function Home(props) {
        const products = props.products;
        const listItems = products.map((car) => 
        <div className="card">
        <img src={car.imgUrl} alt={car.title} style={{width:'100%'}}/>
        <h5>{car.title}</h5>
       <p className="price">{car.price}</p>
       <p>{car.description}</p>
        <p><button>Ditels</button></p>
      </div>
        )

      
       
  return (
  
    
     <div className='conteiner'>
         {listItems}
    </div>
  
    

  );
}

export default Home;