import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import City from "../containers/city";
import City from "./city";

class CityList extends Component {
  renderList = () => {
    return this.props.cities.map((city, index) => {
      return (
        <City
          city={city}
          key={city.name}
          // selected={city.name === this.props.selectedCity.name}
          index={index}
          selectCity={this.props.selectCity}
        />
      );
    });
  };
  render() {
    return <div className="cities">{this.renderList()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(CityList);
