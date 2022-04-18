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
      <div className="active-city">
        <a role="button" onClick={this.handleClick} tabIndex={0}>
          {" "}
          <ul>{this.props.city.name}</ul>
        </a>
      </div>
    );
  }
}

export default City;
