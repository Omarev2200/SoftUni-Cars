import React from 'react';
import './styles.css';

class CreatePost extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            model:'',
            price:'',
            imgUrl:'',
            mileage:'',
            year:'',
            description:'',
            mobile:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit(event) {
        const { model, price, imgUrl, mileage, year, description, mobile } = this.state;

        const post = {
            model, 
            price, 
            imgUrl, 
            mileage, 
            year, 
            description, 
            mobile
        };
        console.log({...post})

        fetch('http://localhost:8080/feed/post/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }
        )
            .then(res => res.json())
            .then(data => {

                if (data.errors) {
                    data.errors.forEach(error => {
                       
                        console.log(error.msg)
                    })
                } else {
                    console.log(data)
                  

                }
            })

        event.preventDefault();
    }

    render() {
        return (

            <form onChange={this.handleSubmit}>
                <h1>Creait Post</h1>


                <label htmlFor="model">Model</label>
                <input 
                id="username" 
                type="text" 
                name='model'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <label htmlFor="price">Price</label>
                <input 
                id="password" 
                type="text" 
                name='price'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <label htmlFor="img">ImgUrl</label>
                <input 
                id="username" 
                type="text" 
                name="imgUrl"
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <label htmlFor="mileage">Mileage</label>
                <input 
                id="password" 
                type="text" 
                name='mileage'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <label htmlFor="year">Year</label>
                <input 
                id="password"
                name='year'
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                required
                 />

                <label htmlFor="description">Description</label>
                <input 
                id="username" 
                type="text" 
                name='description'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <label htmlFor="tel">Mobile:</label>
                <input 
                id="password" 
                type="text" 
                name='mobile'
                value={this.state.email}
                onChange={this.handleChange}
                required
                />

                <button type="submit">Post</button>
            </form>
        )
    }
};
export default CreatePost;