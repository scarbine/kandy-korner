import React from "react";
import "./Location.css";

export const LocationCard = ({location}) => {
  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <div className="location__address">Total Sq. Ft: {location.Squarefootage}</div>
      <div className="location__address">{location.isHandicap}</div>
    </section>
  );
};
