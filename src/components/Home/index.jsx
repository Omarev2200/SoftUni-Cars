import React  from 'react';
import Card from '../card'

import './styles.css'




function Home(props) {
        const products = props.products;
            
  return (   

       <Card products={products} />
  );
}

export default Home;