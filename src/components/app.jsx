import React, { Component } from "react";
import CityList from "../containers/city_list";

const cities = [
  { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" },
  { name: "London", address: "14-22 Elder St, London E1 6BT", slug: "london" },
  {
    name: "Berlin",
    address: "Rudi-Dutschke-Straße 26, 10969 Berlin",
    slug: "berlin",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities,
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    console.log(flats[index]);
  };

  render() {
    return (
      <div>
        <CityList cities={this.state.cities} selectFlat={this.selectFlat} />
      </div>
    );
  }
}
