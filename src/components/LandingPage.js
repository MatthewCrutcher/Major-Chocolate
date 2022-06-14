import React from "react";
//CSS
import "./LandingPage.css";
//Components
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div>
      <div className="landing-page-redirect-container">
        <Navbar />

        <h1>Order Your Favourites</h1>
        <button>View</button>
      </div>
    </div>
  );
}

export default LandingPage;
