import "../css/LandingPage.css";
import React from "react";

export default function LandingPage() {
  return (
    <div className="landing-main-container">
      <div className="landing-left-container">
        <div className="contents">
          <div className="content1">Learn without limits</div>
          <div className="content2">
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </div>
          <button className="join-button">Join Free</button>
        </div>
      </div>
      <div className="landing-right-container">
        <img
          className="landing-img"
          src="./images/landing.png"
          alt="landingImage"
        />
      </div>
    </div>
  );
}
