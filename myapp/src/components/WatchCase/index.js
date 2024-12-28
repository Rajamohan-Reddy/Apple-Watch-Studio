import React, { Component } from "react";

import "./index.css";

let casesList = [
  {
    id: 1,
    case: "Aluminium",
  },
  {
    id: 2,
    case: "Titanium",
  },
];

class WatchCase extends Component {
  state = { isShowSizes: false };

  toggleShowSizes = () => {
    const { toggleShowCaseSlider } = this.props;
    this.setState((prevState) => ({ isShowSizes: !prevState.isShowSizes }));
    toggleShowCaseSlider();
  };

  renderInitialButton = () => (
    <div className="watch-size-container">
      <button className="watch-btn" onClick={this.toggleShowSizes}>
        <div className="watch-size-and-svg-container">
          <svg
            height="21"
            viewBox="0 0 13 21"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h13v21h-13z" fill="none"></path>
            <path
              d="m12.8088 7.3051c-.1274-.1377-.2944-.2067-.5012-.2067h-.313c-.0291-1.7153-1.4238-3.0984-3.1462-3.0984h-5.6968c-1.7407 0-3.1516 1.411-3.1516 3.1515v6.697c0 1.7405 1.4109 3.1515 3.1516 3.1515h5.6968c1.7407 0 3.1516-1.411 3.1516-3.1515v-3.8988h.3076c.2068 0 .3738-.0706.5012-.2119.1274-.141.1912-.3253.1912-.5526v-1.3326c0-.2273-.0637-.4097-.1912-.5475zm-1.8088 6.5435c0 1.1863-.9653 2.1515-2.1516 2.1515h-5.6968c-1.1863 0-2.1516-.9652-2.1516-2.1515v-6.6971c0-1.1863.9653-2.1515 2.1516-2.1515h5.6968c1.1863 0 2.1516.9652 2.1516 2.1515v6.697z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <p className="watch-size-paragraph">Case</p>
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
            viewBox="0 0 13 21"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            onClick={this.toggleShowSizes}
          >
            <path d="m0 0h13v21h-13z" fill="none"></path>
            <path
              d="m12.8088 7.3051c-.1274-.1377-.2944-.2067-.5012-.2067h-.313c-.0291-1.7153-1.4238-3.0984-3.1462-3.0984h-5.6968c-1.7407 0-3.1516 1.411-3.1516 3.1515v6.697c0 1.7405 1.4109 3.1515 3.1516 3.1515h5.6968c1.7407 0 3.1516-1.411 3.1516-3.1515v-3.8988h.3076c.2068 0 .3738-.0706.5012-.2119.1274-.141.1912-.3253.1912-.5526v-1.3326c0-.2273-.0637-.4097-.1912-.5475zm-1.8088 6.5435c0 1.1863-.9653 2.1515-2.1516 2.1515h-5.6968c-1.1863 0-2.1516-.9652-2.1516-2.1515v-6.6971c0-1.1863.9653-2.1515 2.1516-2.1515h5.6968c1.1863 0 2.1516.9652 2.1516 2.1515v6.697z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <ul className="size-list-container">
            {casesList.map((eachCase) => (
              <li key={eachCase.id} className="size-list-item">
                {eachCase.case}
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

export default WatchCase;
