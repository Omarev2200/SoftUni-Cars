import React from "react";
import "./styles.css";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      model: "",
      price: "",
      imgUrl: "",
      mileage: "",
      year: "",
      description: "",
      contact: "",
      engine: "",
      speed: "",
      color: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      model,
      price,
      imgUrl,
      mileage,
      year,
      description,
      contact,
      engine,
      speed,
      color,
    } = this.state;

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
      color,
    };

    fetch("http://localhost:9999/api/car/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          data.errors.forEach((error) => {
            console.log(error.msg);
          });
        } else {
          this.props.history.push("/");
        }
      });
  }

  render() {
    const { isLogged } = this.props;
    console.log(isLogged);

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Creait Post</h1>

        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          value={this.state.model}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
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
          name="mileage"
          value={this.state.mileage}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="year">Year</label>
        <input
          name="year"
          type="text"
          value={this.state.year}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="tel">Contact:</label>
        <input
          type="text"
          name="contact"
          value={this.state.contact}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="tel">Engine:</label>
        <input
          type="text"
          name="engine"
          value={this.state.engine}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="tel">Speed:</label>
        <input
          type="text"
          name="speed"
          value={this.state.speed}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="tel">Color</label>
        <input
          type="text"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Create</button>
      </form>
    );
  }
}
export default CreatePost;
