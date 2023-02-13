import React from "react";

const Card = ({ starshipName }) => {
  console.log(starshipName);
  return <div className="card">{starshipName}</div>;
};

export default Card;
