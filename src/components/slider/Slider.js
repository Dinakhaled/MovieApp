import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss";

class CircleSlider extends Component {
  state = {
    display: true,
    width: 800
  };

  renderSlides = () => {
    return this.props.list.map(({ src, id }) => {
      const background = {
        backgroundImage: `url(${src ? src : "/assets/images/profile-fail.png"})`
      };
      return (
        <div className="slider__slide" key={id}>
          <div className="slider__img" style={background}></div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 1
    };
    return (
      <div>
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
