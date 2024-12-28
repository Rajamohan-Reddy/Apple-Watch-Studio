import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

class WatchSizesSlider extends Component {
  renderFrontView = (frontViewBand, frontViewCase) => (
    <>
      <div
        style={{
          backgroundImage: `url(${frontViewBand})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={frontViewCase} alt="watch" className="watch-display-img" />
      </div>
    </>
  );

  renderSideView = (sideViewImg) => (
    <div className="slider-item-container">
      <img src={sideViewImg} alt="watch" className="watch-display-img" />
    </div>
  );

  renderViews = (eachItem) => {
    const { isTrue } = this.props;

    const { frontViewBand, frontViewCase, sideViewImg } = eachItem;

    if (isTrue === true) {
      return this.renderFrontView(frontViewBand, frontViewCase);
    } else {
      return this.renderSideView(sideViewImg);
    }
  };

  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    const { activeSizeDetails } = this.props;
    return (
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {activeSizeDetails.map((eachItem) => this.renderViews(eachItem))}
        </Slider>
      </div>
    );
  }
}

export default WatchSizesSlider;
