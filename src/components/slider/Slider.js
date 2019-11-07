import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Slider.scss";

class CircleSlider extends Component {
  state = {
    display: true
    // width: 800
  };

  renderSlides = () => {
    return this.props.list.map(({ profile_path, credit_id, id }) => {
      const background = {
        backgroundImage: `url(${
          profile_path
            ? `https://image.tmdb.org/t/p/w342${profile_path}`
            : "/assets/images/profile-fail.png"
        })`
      };
      return (
        <Link to={`/person/${id}`} key={id}>
          <div className="slider__slide">
            <div className="slider__img" style={background}></div>
          </div>
        </Link>
      );
    });
  };

  render() {
    const settings = {
      infinite: false,
      speed: 400,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={this.props.className}>
        <h2 className="title mb-3">{this.props.title}</h2>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider className="slider" {...settings}>
            {this.renderSlides()}
          </Slider>
        </div>
      </div>
    );
  }
}

export default CircleSlider;
