import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import City from "../containers/city";

class City extends Component {
  render() {
    return (
      <h1>
        this is a city
        {this.props.city.name}
      </h1>
    );
  }
}

export default City;
