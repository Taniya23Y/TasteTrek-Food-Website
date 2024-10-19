import React from "react";
import "../../index.css";
import { cardsData } from "../../assets/icons";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="Cards h-[29rem] md:h-[10rem] lg:h-[12rem] lg:w-[5vw]  flex lg:flex-row ">
      {cardsData.map((card, id) => {
        return (
          <div
            // className="parentContainer w-[95vw] h-[25vh] md:w-[20vw] md:h-[20vh]"
            className="parentContainer "
            key={id}
          >
            <Card
              id={card.id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
