import React from 'react';
import { Link } from 'react-router-dom'
import service from '../services/post-service'
import './styles.css';

class Details extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            post: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        
        service.load(id).then(post => {
          this.setState({ post });
          
        });
      }

    render() {
        const {post} = this.state;
        const {user}=this.props;
        
        
        if (post.length === 0) {
            return <div>Loding...</div>
            
        }
       
        return (
            <main>
                <div className='details-conteiner'>
                    <div>
                        <span>{post.model}</span>
                        <br />
                        <img className='img-car' src={post.imgUrl}
                            alt="Mercedes-Benz" />
                        <br />
                        <br />
                        <li className='button'>
                            {user.posts.includes(post._id) && (
                                <div>
                                    <button className='button-edit'><Link to={`/edit/${post._id}`}>Edit</Link></button>
                                <button className='button-delite'><Link to={`/delete/${post._id}`}>Delete</Link></button>
                                </div>
                            )}
                            
                        </li>
                    </div>
                    <div className="container">
                        <div className="row">
                            <ul className="car-info col-md-6">
                                <li><i className="far fa-calendar-alt"></i><p>{post.year}</p></li>
                                <li><i className="fas fa-palette"></i><p>Gray</p></li>
                                <li><i className="fas fa-dollar-sign"></i><p>€{post.price}</p></li>
                                
                            </ul>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <ul className="car-info col-md-6">
                                
                                <li><i className="fas fa-tachometer-alt"></i><p>{post.speed}p/h</p></li>
                                <li><i className="fas fa-road"></i><p>{post.mileage}km</p></li>
                                <li><i className="fas fa-gas-pump"></i><p>{post.engine}</p></li>
                            </ul>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <ul className="car-info col-md-6">
                                
                                <p id='test'>
                                    {post.description}
                                </p>
                            </ul>

                        </div>
                    </div>

                </div>


            </main>
        )
    }
}

export default Details;