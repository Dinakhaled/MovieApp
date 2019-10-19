import React, { Component } from "react";
import { Card as BootStrapCard, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
// import Spinner from "../spinner/Spinner";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true
    };
  }

  // handleImageLoaded = () => {
  //   this.setState({ isLoaded: false });
  // };

  render() {
    return (
      <CardDeck>
        {this.props.list &&
          this.props.list.map(({ title, id, poster_path, vote_average }) => {
            return (
              <Link to="" key={id} className="card-space">
                <BootStrapCard className="border-0 card text-center">
                  {/* {this.state.isLoaded ? <Spinner /> : null} */}
                  <BootStrapCard.Img
                    className="card__img"
                    variant="top"
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w342${poster_path}`
                        : `/assets/images/image-fail.png`
                    }
                    // onLoad={() => this.handleImageLoaded()}
                  />
                  <BootStrapCard.Body>
                    <BootStrapCard.Title>
                      <h2 className="h2-light card__title">{title}</h2>
                    </BootStrapCard.Title>
                    <Rating Rate={(vote_average / 10) * 5} />
                  </BootStrapCard.Body>
                </BootStrapCard>
              </Link>
            );
          })}
      </CardDeck>
    );
  }
}

export default Card;
