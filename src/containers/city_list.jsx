import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import City from "../containers/city";
import City from "./city";

class CityList extends Component {
  renderList = () => {
    return props.cities.map((city, index) => {
      return (
        <City
          city={city}
          key={city.name}
          // selected={city.name === props.selectedCity.name}
          index={index}
          selectCity={props.selectCity}
        />
      );
    });
  };
  render() {
    return <div className="cities">{this.renderList()}</div>;
  }
}

export default CityList;
