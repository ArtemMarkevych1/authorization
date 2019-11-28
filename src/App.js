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
    pageTitle: "Cars list", // any custom value via string
    showCars: false
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  handleClick = newTitle => {
    this.setState({
      pageTitle: newTitle // переназначаем pageTitle
    });
  };

  handleInput = event => {
    this.setState({
      pageTitle: event.target.value //
    });
  };

  divStyle = {
    textAlign: "center"
  };

  render() {
    // const cars = this.state.cars;

    return (
      <div style={this.divStyle}>
        <h1 style={{ color: "red", fontSize: "45px" }}>
          {this.state.pageTitle}
        </h1>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        <br />
        <br />
        <input type="text" onChange={this.handleInput}></input>
        <br />
        <br />
        <button onClick={this.handleClick.bind(this, "Title is changed")}>
          Change Title
        </button>
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.handleClick(car.name)}
                />
              );
            })
          : null}
        {/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.handleClick.bind(this, cars[0].name)}
        ></Car>
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.handleClick(cars[1].name)}
        ></Car>
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={this.handleClick.bind(this, cars[2].name)}
        ></Car> */}
      </div>
    );
  }
}

export default App;
