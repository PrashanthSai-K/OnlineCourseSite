import React from "react";
import "../css/card.css";

function Card() {
  return (
    <div className="card-body">
      <div className="main-container">
        <div className="top-container">
          <center>
            <div className="container-content1">Practice advice</div>
            <div className="container-content2">Our Experts Teacher</div>
          </center>
        </div>
        <div className="bottom-container">
          <div className="card">
            <div className="left-card">
              <img className="card-img1" src="./images/img1.png" alt="" />
            </div>
            <div className="right-card">
              <div className="card-content1">Training Courses</div>
              <div className="card-content2">Get Quality Education</div>
              <div className="card-content3">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </div>
              <button className="card-button1">Learn More</button>
            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <img className="card-img2" src="./images/img2.png" alt="" />
            </div>
            <div className="right-card">
              <div className="card-content1">Online Courses </div>
              <div className="card-content2">Our Popular Courses</div>
              <div className="card-content3">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </div>
              <button className="card-button1">Learn More</button>
            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <img className="card-img3" src="./images/img3.png" alt="" />
            </div>
            <div className="right-card">
              <div className="card-content1">Expert instruction</div>
              <div className="card-content2">Most Popular Courses</div>
              <div className="card-content3">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </div>
              <button className="card-button1">Learn More</button>
            </div>
          </div>
          <div className="card">
            <div className="left-card">
              <img className="card-img4" src="./images/img4.jpg" alt="" />
            </div>
            <div className="right-card">
              <div className="card-content1">Time instruction</div>
              <div className="card-content2">Set the Course Duration</div>
              <div className="card-content3">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </div>
              <button className="card-button1">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
