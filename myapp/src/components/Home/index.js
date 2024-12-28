import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div className="apple-home-bg-container">
    <img
      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
      alt="applelogo"
      className="apple-watch-logo"
    />
    <div className="home-watch-desc-container">
      <h1 className="apple-watch-studio-heading">Apple Watch Studio</h1>
      <h1 className="apple-watch-description-headings">Choose a case.</h1>
      <h1 className="apple-watch-description-headings">Pick a band.</h1>
      <h1 className="apple-watch-description-headings">
        Create your own style.
      </h1>
      <Link to="/details" className="link-item">
        <button className="get-started-btn">Get Started</button>
      </Link>
      <div className="watch-bg-container">
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF+watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVE5MS0NHdU9pQ1oreFZMVHc2eWpaK0dWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM2lPQU12OHNybENqV2ZFcFd3bnFPMG91USs1b3UrbjRBN0I4YzZxZklZWjZNK3lsZE1HRkRZTjZSeEJXd0NXdmpxSjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjY09hSTZHSVNON2N2Y1VlSmNRV2luWDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw"
          alt="home-watch"
          className="watch-img"
        />
      </div>
    </div>
  </div>
);

export default Home;
