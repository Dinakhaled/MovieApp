import React from "react";
import { Card as BootStrapCard, CardDeck } from "react-bootstrap";
import Rating from "../rating/Rating";
import "./Card.scss";

const Card = ({ list }) => {
  return (
    <CardDeck>
      {list &&
        list.map(({ name, rate, id }) => {
          return (
            <BootStrapCard key={id} className="border-0 card text-center">
              <BootStrapCard.Img
                className="card__img"
                variant="top"
                src="/assets/images/test.jpg"
              />
              <BootStrapCard.Body>
                <BootStrapCard.Title>
                  <h2 className="h2-light card__title">{name}</h2>
                </BootStrapCard.Title>
                <Rating Rate={rate} />
              </BootStrapCard.Body>
            </BootStrapCard>
          );
        })}
    </CardDeck>
  );
};

export default Card;
