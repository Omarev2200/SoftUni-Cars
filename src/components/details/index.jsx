import React from 'react';
import {Link} from 'react-router-dom'
import  './styles.css';

class Details extends React.Component{
    constructor(props) {

        super(props)
    
        this.state = {
         
        };
    }

    render() {
        return(
            <main>
            <div className='details-conteiner'>
                <div>
                    <span>Mercedes-Benz</span>
                    <br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9U31vCk7Ji3PyRPt6aKSCB_ErMqVUN2NXHo61YaEhxePosOR&s" 
                    alt="Mercedes-Benz"/>
                    <br/>
                    <br/>
                        <li className='button'>
                        <button className='button-edit'><Link to="/edit/{{_id}}">Edit</Link></button>
                        <button className='button-delite'><Link to="/delete/{{_id}}">Delete</Link></button>
                        </li>
                </div>
                <div className='details-li'>
                    <ul>
                        <li>55 000 лв.</li>
                        <br/>
                        <li>
                            <span>2018г.</span>
                            <span>100 000 km.</span>
                        </li>
                        <br/>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eos inventore laborum rerum optio voluptas provident eum repudiandae delectus est vel quod sed ex itaque sunt soluta consequuntur hic et?</li>
                        <br/>
                        <li>CONTACT:+359 888 88 88 88</li>
                    </ul>
                </div>
            </div>

            </main>
        )
    }
}

export default Details;