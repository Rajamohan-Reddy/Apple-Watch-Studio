import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

class WatchCaseSlider extends Component {
  state = { showSlider: true };

  toggleSlider = () => {};
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
        className="cases-container"
        style={{
          backgroundImage: `url(${eachItem.band})`,
        }}
      >
        <img src={eachItem.case} className="case-img" alt="watchcase" />
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

  renderSingleItemView = (eachItem) => this.renderViews(eachItem);

  render() {
    const { activeCaseDetails } = this.props;
    let val;
    if (activeCaseDetails.length >= 3) {
      val = 3;
    } else if (activeCaseDetails.length === 1) {
      val = 1;
    }

    const settings = {
      slidesToShow: val,
      slidesToScroll: 1,
      focusOnSelect: true,
    };
    return (
      <div className="case-slider-container">
        <Slider {...settings} className="case-slider">
          {activeCaseDetails.map((eachItem) => this.renderViews(eachItem))}
        </Slider>
      </div>
    );
  }
}

export default WatchCaseSlider;
