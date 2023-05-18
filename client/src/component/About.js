import React from "react";
import "../css/About.css";

export default function About() {
  return (
      <div className="aboutus-container">
        <div className="aboutus-heading">Corsera</div>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="aboutus-content">
          <ul className="list1">
            <li className="list-item " id="highlight">
              Get In Touch
            </li>
            <li className="list-item">Corsera@gmail.com</li>
            <li className="list-item">Follow</li>
          </ul>
          <ul className="list1">
            <li className="list-item" id="highlight">
              Legal
            </li>
            <li className="list-item">Privacy policy</li>
            <li className="list-item">License</li>
            <li className="list-item">Terms of Service</li>
          </ul>
          <ul className="list1">
            <li className="list-item" id="highlight">
              Follow Us On
            </li>
            <li className="list-item">facebook</li>
            <li className="list-item">instagram</li>
            <li className="list-item">twitter</li>
          </ul>
        </div>
      </div>
  );
}
