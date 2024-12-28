import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

class WatchBandSlider extends Component {
  renderSideView = (eachItem) => (
    <div>
      <img
        src={eachItem.sideView}
        alt="side-view-watch"
        className="side-case-img"
      />
    </div>
  );

  renderFrontView = (eachItem) => (
    <>
      <div
        className="band-container"
        style={{
          backgroundImage: `url(${eachItem.frontViewBand})`,
        }}
      >
        <img
          src={eachItem.frontViewCase}
          className="case-img"
          alt="watchcase"
        />
      </div>
    </>
  );

  renderViews = (eachItem) => {
    const { isTrue } = this.props;

    if (isTrue === true) {
      return this.renderFrontView(eachItem);
    } else {
      return this.renderSideView(eachItem);
    }
  };

  render() {
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    const { activeBandDetails } = this.props;
    return (
      <div className="band-slider-container">
        <Slider {...settings} className="band-slider">
          {activeBandDetails.map((eachItem) => this.renderViews(eachItem))}
        </Slider>
      </div>
    );
  }
}

export default WatchBandSlider;
