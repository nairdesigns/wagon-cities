import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectCity from "../actions/index";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
    console.log("clicked!");
  };
  render() {
    return (
      <div className="city">
        <a role="button" onClick={this.handleClick} tabIndex={0}>
          {" "}
          <ul>{this.props.city.name}</ul>
        </a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
