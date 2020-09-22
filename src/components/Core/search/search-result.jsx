import React from 'react';


class SearchResult extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            articles:[]
        }
    }

   

      componentDidMount() {
        
            
        const {query} = this.props
        console.log(query);
        
        
        fetch(`http://localhost:9999/api/car/search?q=${query}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    articles:data.articles
                })
                

                
          
        });
    };

    render() {
        
        const {articles} = this.state;
        console.log(articles);
        
      
      const listPost = articles.map((car) => 
        
  
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
      return (
        <section>
          <div className="recent-cars">
            {listPost}
          </div>
        </section>

      )
  }
    }
export default SearchResult;