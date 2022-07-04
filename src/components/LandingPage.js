import React from "react";
import { useNavigate } from "react-router-dom";
//CSS
import "./LandingPage.css";
//Components
import Navbar from "./Navbar";
import LandingPageGallery from "./LandingPageGallery";
import LandingPageQuotes from "./LandingPageQuotes";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="landing-page-redirect-container">
        <Navbar />

        <h1>Order Your Favourites</h1>
        <button onClick={() => navigate("/shop")}>View</button>
      </div>
      <LandingPageGallery />
      <LandingPageQuotes />
    </div>
  );
}

export default LandingPage;
