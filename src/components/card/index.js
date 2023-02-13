import React from "react";
import "./index.css";

const Card = ({ starshipName }) => {
  console.log(starshipName);
  return <div className="card">{starshipName}</div>;
};

export default Card;
