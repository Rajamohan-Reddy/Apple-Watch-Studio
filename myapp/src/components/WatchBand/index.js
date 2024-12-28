import React, { Component } from "react";

import "./index.css";

let bandsList = [
  {
    id: 1,
    band: "Stainless Steel",
  },
  {
    id: 2,
    band: "Sport Loop",
  },
  {
    id: 3,
    band: "Sport Band",
  },
  {
    id: 4,
    band: "Fine Woven",
  },
  {
    id: 5,
    band: "Braided Solo Loop",
  },
  {
    id: 6,
    band: "Solo Loop",
  },
  {
    id: 7,
    band: "Nike Sport Loop",
  },
  {
    id: 8,
    band: "Nike Sport Band",
  },
];

class WatchBand extends Component {
  state = { isShowSizes: false };

  toggleShowSizes = () => {
    const { toggleShowBandsSlider } = this.props;
    this.setState((prevState) => ({ isShowSizes: !prevState.isShowSizes }));
    toggleShowBandsSlider();
  };

  renderInitialButton = () => (
    <div className="watch-size-container">
      <button className="watch-btn" onClick={this.toggleShowSizes}>
        <div className="watch-size-and-svg-container">
          <svg
            height="21"
            viewBox="0 0 9 21"
            width="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h9v21h-9z" fill="none"></path>
            <path
              d="m8.5 18.5a.5.5 0 0 1 -.5.5h-7a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-4.8974a3.9956 3.9956 0 0 0 1 .8259v4.0715a1.4779 1.4779 0 0 1 -.0813.485h4.1628a1.4732 1.4732 0 0 1 -.0815-.485v-4.0714a3.9981 3.9981 0 0 0 1-.826v4.8974a.4851.4851 0 0 0 .485.485h.015a.5.5 0 0 1 .5.5zm-1.9187-15.5h-4.1628a1.4732 1.4732 0 0 1 .0815.485v6.515a2 2 0 0 0 4 0v-6.515a1.4779 1.4779 0 0 1 .0813-.485m1.4187-1a.5.5 0 1 1 0 1h-.015a.485.485 0 0 0 -.485.485v6.515a3 3 0 0 1 -6 0v-6.515a.4851.4851 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3 8a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm0-2a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm0-2a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <p className="watch-size-paragraph">Band</p>
        </div>
      </button>
    </div>
  );

  renderFullButton = () => (
    <div>
      <button className="watch-btn">
        <div className="full-btn-container">
          <svg
            height="21"
            viewBox="0 0 9 21"
            width="9"
            xmlns="http://www.w3.org/2000/svg"
            onClick={this.toggleShowSizes}
          >
            <path d="m0 0h9v21h-9z" fill="none"></path>
            <path
              d="m8.5 18.5a.5.5 0 0 1 -.5.5h-7a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-4.8974a3.9956 3.9956 0 0 0 1 .8259v4.0715a1.4779 1.4779 0 0 1 -.0813.485h4.1628a1.4732 1.4732 0 0 1 -.0815-.485v-4.0714a3.9981 3.9981 0 0 0 1-.826v4.8974a.4851.4851 0 0 0 .485.485h.015a.5.5 0 0 1 .5.5zm-1.9187-15.5h-4.1628a1.4732 1.4732 0 0 1 .0815.485v6.515a2 2 0 0 0 4 0v-6.515a1.4779 1.4779 0 0 1 .0813-.485m1.4187-1a.5.5 0 1 1 0 1h-.015a.485.485 0 0 0 -.485.485v6.515a3 3 0 0 1 -6 0v-6.515a.4851.4851 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3 8a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm0-2a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5zm0-2a.5.5 0 1 0 -.5.5.5.5 0 0 0 .5-.5z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <ul className="size-list-container">
            {bandsList.map((eachBand) => (
              <li key={eachBand.id} className="size-list-item">
                {eachBand.band}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );

  render() {
    const { isShowSizes } = this.state;
    return (
      <div>
        {isShowSizes ? this.renderFullButton() : this.renderInitialButton()}
      </div>
    );
  }
}

export default WatchBand;
