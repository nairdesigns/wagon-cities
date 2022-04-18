import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import City from "../containers/city";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.index);
    console.log("clicked!");
  };
  render() {
    return (
      <div className="active-city" onClick={this.handleClick}>
        <ul>{this.props.city.name}</ul>
      </div>
    );
  }
}

export default City;
