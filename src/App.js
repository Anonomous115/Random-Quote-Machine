import React, { Component } from "react";

import "./App.css";
const text = "i am fine";
let Quotes = [];

const color = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const random = Math.random() * 5;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: "",
      Quotes:
        "Too many of us are not living our dreams because we are living our fears",
      Author: "Les Brown",
      colors: [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857",
      ],
      index1: 0,
      index2: 0,
      index2: 0,
    };
    this.initiate = this.initiate.bind(this);
  }
  componentWillMount() {
    fetch(
      "https://gist.githubusercontent.com/farhankk360/5d106fcc7c09e2624b1480ae777d73f3/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.quotes,
          isLoaded: true,
        });
      });
  }

  initiate() {
    const { quote, author } = this.state.items[
      Math.floor(Math.random() * this.state.items.length)
    ];
    this.setState({
      index: Math.floor(Math.random() * Quotes.length.length),
      index1: Math.floor(Math.random() * color.length),
      index2: Math.floor(Math.random() * 12),
      index3: Math.floor(Math.random() * 11),

      Quotes: '"' + quote + '"',
      Author: "--" + author + "--",
    });
  }

  render() {
    console.log(this.state.items);
    return (
      <div
        className="body"
        style={{ backgroundColor: color[this.state.index1] }}
      >
        <div className="card">
          <h1 className="text" style={{ color: color[this.state.index2] }}>
            Quotes
          </h1>
          <h1 className="quotes">{this.state.Quotes}</h1>
          <p className="authors">{this.state.Author}</p>
          <button
            className="btn"
            type="submit"
            onClick={this.initiate || this.colors}
            style={{ backgroundColor: color[this.state.index3] }}
          >
            Submit
          </button>
        </div>
        <div className="aboutMe">
          <p>Made with ❤️ in React</p>
          <h1>Anounomous115</h1>
        </div>
      </div>
    );
  }
}

export default App;
