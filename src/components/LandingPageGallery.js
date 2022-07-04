import React from "react";
import { useNavigate } from "react-router-dom";
//CSS
import "./LandingPageGallery.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

function LandingPageGallery() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="landing-page-gallery-container">
        <img id="image1" src={image1} alt="range of chocolates" />
        <img id="image2" src={image2} alt="strawberry chocolate" />
        <img id="image3" src={image3} alt="stack of chocolate" />
        <img id="image4" src={image4} alt="rasberry filled chocolate" />
        <img id="image5" src={image5} alt="chocolate bars stacked" />
        <div className="new-range-container">
          <h1>View our new range...</h1>
          <button onClick={() => navigate("/shop")}>Yes Please!</button>
        </div>
      </div>
    </div>
  );
}
export default LandingPageGallery;
