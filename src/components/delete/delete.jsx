import React from 'react';
import postService from '../services/post-service';

class Delete extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            model: '',
            price: '',
            imgUrl: '',
            mileage: '',
            year: '',
            description: '',
            contact: '',
            engine: '',
            speed:'',
            color:''
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
        event.preventDefault();
        const { model, price, imgUrl, mileage, year, description, contact, engine, speed, color } = this.state;
        const id = this.props.match.params.id;
        const post = {
            model,
            price,
            imgUrl,
            mileage,
            year,
            description,
            contact,
            engine,
            speed,
            color
        };


        fetch(`http://localhost:9999/api/car/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(post),
            credentials: 'include'
        }
        )
            .then(res => res.json())
            .then(() => {
                this.props.history.push('/');
            })


    }

    componentDidMount() {
        const id = this.props.match.params.id;

        postService.load(id).then(post => {
            this.setState({ ...post });

        });
    }

    render() {

        return (

            <form onSubmit={this.handleSubmit}>
                <h1>Delete</h1>


                <label htmlFor="model">Model</label>
                <input

                    type="text"
                    name='model'
                    value={this.state.model}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="price">Price</label>
                <input

                    type="text"
                    name='price'
                    value={this.state.price}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="img">ImgUrl</label>
                <input

                    type="text"
                    name="imgUrl"
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="mileage">Mileage</label>
                <input

                    type="text"
                    name='mileage'
                    value={this.state.mileage}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="year">Year</label>
                <input

                    name='year'
                    type="text"
                    value={this.state.year}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="description">Description</label>
                <input

                    type="text"
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="tel">Contact:</label>
                <input

                    type="text"
                    name='contact'
                    value={this.state.contact}
                    onChange={this.handleChange}
                    required
                />
                <label htmlFor="tel">Engine:</label>
                <input

                    type="text"
                    name='engine'
                    value={this.state.engine}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="tel">Speed:</label>
                <input

                    type="text"
                    name='speed'
                    value={this.state.speed}
                    onChange={this.handleChange}
                    required
                />

                <label htmlFor="tel">Color</label>
                <input

                    type="text"
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                    required
                />

                <button type="submit">Delete</button>
            </form>
        )
    }
};

export default Delete;