import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/card";
import CardsContainer from "../../components/cards_container";
import Header from "../../components/header";
import Pagination from "../../components/pagination";
import "./index.css";

const MainPage = () => {
  const [starshipArray, setStarshipArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let pageSize = 10;
  let isFirstRender = useRef(true);
  const baseURL = "https://swapi.dev/api/";

  const makeServerCall = async (page) => {
    let serverResponse = await axios({
      method: "GET",
      url: `${baseURL}/starships/?page=${page}`,
    });
    let results = serverResponse.data.results;
    pageSize = results.length;

    setStarshipArray(results);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    makeServerCall(page);
  };

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      makeServerCall(1);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <Header />
      <CardsContainer>
        {starshipArray.map((starship, i) => {
          return (
            <Card
              key={i}
              starshipName={starship.name}
              starshipClass={starship.starship_class}
            />
          );
        })}
      </CardsContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={36}
        pageSize={pageSize}
        onPageChange={onPageChange}
        makeServerCall={makeServerCall}
      />
    </div>
  );
};

export default MainPage;
