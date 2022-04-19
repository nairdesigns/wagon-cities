import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import City from "../containers/city";
import City from "./city";

class CityList extends Component {
  renderList = () => {
    return this.props.cities.map((city) => {
      return <City city={city} key={city.name} />;
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
