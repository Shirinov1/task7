import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    feed: " "
  };

  changeHandler = (e) => {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "surname") {
      this.setState({ surname: e.target.value });
    }
    if (e.target.id === "phone") {
      this.setState({ phone: e.target.value });
    }
    if (e.target.id === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "feed") {
      this.setState({ feed: e.target.value });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Has been accepted");
    console.log(this.state);
  };

  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name: <br />
            <input
              id="name"
              type="text"
              required
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="surname">
            Surname: <br />
            <input
              id="surname"
              type="text"
              required
              value={this.state.surname}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="email">
            Email adress:
            <br />
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="phone">
            Phone number:
            <br />
            <input
              id="phone"
              type="text"
              value={this.state.phone}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="feed">
            Subject text:
            <br />
            <textarea
              id="serh"
              type="text"
              // value={this.state.feed}
              onChange={this.changeHandler}
              cols="22"
            />
          </label>
          <br />
          <div id="btn">
          <button type="submit">Gonder</button>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
