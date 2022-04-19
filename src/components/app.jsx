import React, { Component } from "react";
import CityList from "../containers/city_list";
import cities from "../data/cities";
import ActiveCity from "../containers/active_city";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities,
    };
  }

  selectCity = (index) => {
    this.setState({ selectedFlat: cities[index] });
    console.log(cities[index]);
  };

  render() {
    return (
      <div className="app">
        <CityList cities={this.state.cities} selectCity={this.selectCity} />
        <ActiveCity />
      </div>
    );
  }
}
