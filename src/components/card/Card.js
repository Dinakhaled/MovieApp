import React, { Component, Suspense } from "react";
import { Card as BootStrapCard } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import Spinner from "../spinner/Spinner";
import { animateScroll as scroll } from "react-scroll";
import "./Card.scss";
const CardImage = React.lazy(() => import("../cardImage/CardImage"));

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        {this.props.list &&
          this.props.list.map(({ title, id, poster_path, vote_average }) => {
            return (
              <Link
                to={`/MovieApp/movie/${id}`}
                key={id}
                className="card-space"
                onClick={this.scrollToTop()}
              >
                <BootStrapCard className="border-0 card text-center d-flex align-items-center">
                  <Suspense fallback={<Spinner />}>
                    <CardImage src={poster_path} />
                  </Suspense>
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
      </React.Fragment>
    );
  }
}

export default Card;
