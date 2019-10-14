import React from "react";
import { Card as BootStrapCard, CardDeck } from "react-bootstrap";
import Rating from "../rating/Rating";
import "./Card.scss";

const Card = ({ list }) => {
  return (
    <CardDeck>
      {list &&
        list.map(({ title, rate, id, poster_path, vote_average }) => {
          return (
            <BootStrapCard key={id} className="border-0 card text-center">
              <BootStrapCard.Img
                className="card__img"
                variant="top"
                src={`https://image.tmdb.org/t/p/w342${poster_path}`}
              />
              <BootStrapCard.Body>
                <BootStrapCard.Title>
                  <h2 className="h2-light card__title">{title}</h2>
                </BootStrapCard.Title>
                <Rating Rate={(vote_average / 10) * 5} />
              </BootStrapCard.Body>
            </BootStrapCard>
          );
        })}
    </CardDeck>
  );
};

export default Card;
