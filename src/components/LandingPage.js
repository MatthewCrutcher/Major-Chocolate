import React from "react";
//CSS
import "./LandingPage.css";
//Components
import Navbar from "./Navbar";
import LandingPageGallery from "./LandingPageGallery";

function LandingPage() {
  return (
    <div>
      <div className="landing-page-redirect-container">
        <Navbar />

        <h1>Order Your Favourites</h1>
        <button>View</button>
      </div>
      <LandingPageGallery />
    </div>
  );
}

export default LandingPage;
