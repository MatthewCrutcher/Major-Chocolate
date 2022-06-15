import React from "react";
//CSS
import "./LandingPageQuotes.css";

function LandingPageQuotes() {
  return (
    <div>
      <div className="landing-page-quotes-container">
        <div className="quote-container">
          <h1>Best chocolate I've ever had!</h1>
          <h4>- Joe Smith</h4>
        </div>
        <div className="quote-container" id="second-quote">
          <h1>Delivery was so fast</h1>
          <h4>- Matt C</h4>
        </div>
        <div className="quote-container">
          <h1>The new range is so good!</h1>
          <h4>- Tiger Lilly</h4>
        </div>
      </div>
    </div>
  );
}

export default LandingPageQuotes;
