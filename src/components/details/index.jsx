import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

class Details extends React.Component {
    constructor(props) {

        super(props)

        this.state = {

        };
    }

    render() {
        return (
            <main>
                <div className='details-conteiner'>
                    <div>
                        <span>Mercedes-Benz</span>
                        <br />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9U31vCk7Ji3PyRPt6aKSCB_ErMqVUN2NXHo61YaEhxePosOR&s"
                            alt="Mercedes-Benz" />
                        <br />
                        <br />
                        <li className='button'>
                            <button className='button-edit'><Link to="/edit/{{_id}}">Edit</Link></button>
                            <button className='button-delite'><Link to="/delete/{{_id}}">Delete</Link></button>
                        </li>
                    </div>
                    <div class="container">
                        <div class="row">
                            <ul class="car-info col-md-6">
                                <li><i className="far fa-calendar-alt"></i><p>2017</p></li>
                                <li><i class="fas fa-palette"></i><p>Gray</p></li>
                                <li><i class="fas fa-dollar-sign"></i><p>€200 000</p></li>
                                
                            </ul>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <ul class="car-info col-md-6">
                                
                                <li><i className="fas fa-tachometer-alt"></i><p>240p/h</p></li>
                                <li><i className="fas fa-road"></i><p>20.000km</p></li>
                                <li><i className="fas fa-gas-pump"></i><p>Diesel</p></li>
                            </ul>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <ul class="car-info col-md-6">
                                
                                <p id='test'>
                                    dsdsdsdsdsssssssssssssssfffffffffffffffffffffffffffffffffffffffsssssssssssssssssssssssssssssssssss
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