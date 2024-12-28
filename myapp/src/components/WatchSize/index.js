import React, { Component } from "react";

import "./index.css";

let sizesList = [
  {
    id: 1,
    size: "42mm",
  },
  {
    id: 2,
    size: "46mm",
  },
];

class WatchSize extends Component {
  state = { isShowSizes: false };

  toggleShowSizes = () => {
    const { toggleShowSizesSlider } = this.props;
    this.setState((prevState) => ({ isShowSizes: !prevState.isShowSizes }));
    toggleShowSizesSlider();
  };

  renderInitialButton = () => (
    <div className="watch-size-container">
      <button className="watch-btn" onClick={this.toggleShowSizes}>
        <div className="watch-size-and-svg-container">
          <svg
            height="21"
            viewBox="0 0 16 21"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h16v21h-16z" fill="none"></path>
            <path
              d="m16 7.8525v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1414-.2944.2119-.5012.2119h-.3076v3.8988c0 1.7405-1.4109 3.1515-3.1516 3.1515h-2.8064c.2803-.2888.5098-.6262.6733-1h2.1331c1.1863 0 2.1516-.9652 2.1516-2.1515v-6.697c0-1.1863-.9653-2.1515-2.1516-2.1515h-5.6968c-.7747 0-1.449.3842-1.8281 1h-1.1089c.4529-1.1854 1.5923-2 2.937-2h5.6968c1.7224 0 3.1172 1.3831 3.1462 3.0984h.313c.2068 0 .3738.069.5012.2067.1274.1378.1912.3202.1912.5475zm-6.7629 3.724h-.2371v3.0435c0 1.3145-1.0657 2.38-2.3799 2.38h-4.2402c-1.3142 0-2.3799-1.0656-2.3799-2.38v-5.2401c0-1.3143 1.0657-2.3799 2.3799-2.3799h4.2402c1.3142 0 2.3799 1.0656 2.3799 2.3799v.0035h.2371c.1589 0 .2874.053.3855.1589s.147.2463.147.4211v1.025c0 .1749-.0488.3167-.147.4252-.0981.1086-.2266.1628-.3855.1628zm-1.2371-2.1967c0-.7609-.6189-1.3799-1.3799-1.3799h-4.2402c-.761 0-1.3799.619-1.3799 1.3799v5.2401c0 .761.6189 1.38 1.3799 1.38h4.2402c.0986 0 .1948-.0114.2876-.0311.6233-.1328 1.0923-.6866 1.0923-1.3489z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <p className="watch-size-paragraph">Size</p>
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
            viewBox="0 0 16 21"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            onClick={this.toggleShowSizes}
          >
            <path d="m0 0h16v21h-16z" fill="none"></path>
            <path
              d="m16 7.8525v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1414-.2944.2119-.5012.2119h-.3076v3.8988c0 1.7405-1.4109 3.1515-3.1516 3.1515h-2.8064c.2803-.2888.5098-.6262.6733-1h2.1331c1.1863 0 2.1516-.9652 2.1516-2.1515v-6.697c0-1.1863-.9653-2.1515-2.1516-2.1515h-5.6968c-.7747 0-1.449.3842-1.8281 1h-1.1089c.4529-1.1854 1.5923-2 2.937-2h5.6968c1.7224 0 3.1172 1.3831 3.1462 3.0984h.313c.2068 0 .3738.069.5012.2067.1274.1378.1912.3202.1912.5475zm-6.7629 3.724h-.2371v3.0435c0 1.3145-1.0657 2.38-2.3799 2.38h-4.2402c-1.3142 0-2.3799-1.0656-2.3799-2.38v-5.2401c0-1.3143 1.0657-2.3799 2.3799-2.3799h4.2402c1.3142 0 2.3799 1.0656 2.3799 2.3799v.0035h.2371c.1589 0 .2874.053.3855.1589s.147.2463.147.4211v1.025c0 .1749-.0488.3167-.147.4252-.0981.1086-.2266.1628-.3855.1628zm-1.2371-2.1967c0-.7609-.6189-1.3799-1.3799-1.3799h-4.2402c-.761 0-1.3799.619-1.3799 1.3799v5.2401c0 .761.6189 1.38 1.3799 1.38h4.2402c.0986 0 .1948-.0114.2876-.0311.6233-.1328 1.0923-.6866 1.0923-1.3489z"
              fill="#1d1d1f"
            ></path>
          </svg>
          <ul className="size-list-container">
            {sizesList.map((eachSize) => (
              <li key={eachSize.id} className="size-list-item">
                {eachSize.size}
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

export default WatchSize;
