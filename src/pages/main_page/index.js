import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/card";
import CardsContainer from "../../components/cards_container";
import Header from "../../components/header";
import "./index.css";

const MainPage = () => {
  const [starshipArray, setStarshipArray] = useState([]);

  let isFirstRender = useRef(true);

  const baseURL = "https://swapi.dev/api/";

  const makeServerCall = async () => {
    let serverResponse = await axios({
      method: "GET",
      url: `${baseURL}/starships/`,
    });
    let results = serverResponse.data.results;

    console.log(results);
    setStarshipArray(results);
    console.log(starshipArray);
  };

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      makeServerCall();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <Header />
      <CardsContainer>
        {starshipArray.map((starship, i) => {
          return <Card key={i} starshipName={starship.name} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default MainPage;
