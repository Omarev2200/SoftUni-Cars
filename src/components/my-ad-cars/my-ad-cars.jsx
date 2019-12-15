import React from 'react';
import service from '../services/post-service'

class MyAdCars extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            posts:[]
      
          }
    }

    render() {
        const {posts} = this.state;
       
      
      const listPost = posts.map((car) => 
        
  
      <div className="container" key={car._id}>
          <div className="recent-car-content">
              <div className="row">                      
                  <div className="col-md-4 col-sm-6">
                      <div className="car-item wow fadeIn animated">
                          <div className="thumb-content">
                              <div className="car-banner">
                                  <a href={`/details/${car._id}`}>For Rent</a>
                              </div>
                              <div className="thumb-inner">
                                  <a href={`/details/${car._id}`}><img alt=""
                                          src={car.imgUrl}/></a>
                              </div>
                          </div>
                          <div className="down-content">
                              <a href="single_car.html">
                              <h4>{car.model}</h4>
                              </a>
                              <span>€{car.price}</span>
                              
                              <ul className="car-info">
                                  <li>
                                      <div className="item"><i className="far fa-calendar-alt"></i>
                                      <p>{car.year}</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="item"><i className="fas fa-tachometer-alt"></i>
                                          <p>{car.speed}p/h</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="item"><i className="fas fa-road"></i>
                                          <p>{car.mileage}km.</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="item"><i className="fas fa-gas-pump"></i>
                                          <p>{car.engine}</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

 )
        return(
        <section>
            {posts.length === 0? 
          <div>
            <h1>There are no published advertisement</h1>
          </div>:<div className="recent-cars">
            {listPost}
          </div>}
          
        </section>
        )

        
    }
    componentDidMount() {
        const id = this.props.user._id;
        fetch(`http://localhost:9999/api/car/my-cars/${id}`)
        .then(res => res.json())
        .then(posts => {
          this.setState({posts});
        //   console.log(posts);
          
        });
      }
}
    

export default MyAdCars;