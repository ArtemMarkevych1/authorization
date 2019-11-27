import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Toyota", year: 2018 },
      { name: "Mazda", year: 2017 },
      { name: "BMW", year: 2016 }
    ],
    pageTitle: "There are the cars"
  };

  handleClick = () => {
    const newTitle = this.state.pageTitle // создаем новую переменную, которая будет делать что то со старым стейтом
      .split("")
      .reverse()
      .join("");

    this.setState({
      pageTitle: newTitle
    });

    // const newTitle = this.state.pageTitle
    //   .split("")
    //   .reverse()
    //   .join("");

    // this.setState({
    //   pageTitle: newTitle
    // });
    // console.log('Click was')
  };

  render() {
    const carse = this.state.cars;

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.handleClick}>Change title</button>
        <Car name={carse[0].name} year={carse[0].year} />
        <Car name={carse[1].name} year={carse[1].year} />
        <Car name={carse[2].name} year={carse[2].year} />
      </div>
    );
  }
}

export default App;
