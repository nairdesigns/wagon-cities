import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import City from "../containers/city";
import City from "./city";

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city) => {
      return (
        <City
        // city={city}
        // key={city.lat}
        // selected={city.name === props.selectedCity.name}
        // index={index}
        // selectCity={props.selectCity}
        />
      );
    });
  };

  return <div className="city-list">{renderList()}</div>;
};

export default CityList;
