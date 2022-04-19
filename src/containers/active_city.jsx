import React from "react";

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} width="100%" alt="city" />
    </div>
  );

  function mapStateToProps(state) {
    return {
      activeCity: state.activeCity,
    };
  }
};

export default ActiveCity;
