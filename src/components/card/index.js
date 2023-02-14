import React from "react";
import "./index.css";

const Card = ({ starshipName, starshipClass }) => {
  return (
    <div className="card">
      <h3 className="card-title">{starshipName}</h3>
      <p className="card-body">Class: {starshipClass}</p>
    </div>
  );
};

export default Card;
