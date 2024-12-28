import React, { Component } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Popup from "reactjs-popup";
import "./index.css";

const watchesPopList = [
  {
    id: 0,
    name: "Apple Watch Series 10",
    type: "appleSeries10",
  },
  {
    id: 1,
    name: "Apple Watch Hermes Series 10",
    type: "appleHermes10",
  },
  {
    id: 2,
    name: "Apple Watch SE",
    type: "appleSe10",
  },
];

class Header extends Component {
  renderBtns = (eachItem) => {
    const {
      toggleActiveWatchDetails,
      toggleActiveSizeDetails,
      toggleActiveCaseDetails,
      toggleActiveBandDetails,
    } = this.props;

    const selectBtn = () => {
      toggleActiveWatchDetails(eachItem.id);
      toggleActiveSizeDetails(eachItem.type);
      toggleActiveCaseDetails(eachItem.type);
      toggleActiveBandDetails(eachItem.type);
    };

    return (
      <div className="btn-container">
        <button key={eachItem.id} className="pop-item-btn" onClick={selectBtn}>
          {eachItem.name}
        </button>
        <hr />
      </div>
    );
  };

  render() {
    return (
      <nav className="nav-container">
        <div className="navbar-container">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
            alt="applelogo"
            className="nav-log"
          />
          <div>
            <Popup
              trigger={
                <button className="popup-btn" type="button">
                  Collections <IoIosArrowDown />
                </button>
              }
            >
              <div className="pop-container">
                {watchesPopList.map((eachItem) => this.renderBtns(eachItem))}
              </div>
            </Popup>
          </div>
          <button className="save-btn">Save</button>
        </div>
      </nav>
    );
  }
}

export default Header;
