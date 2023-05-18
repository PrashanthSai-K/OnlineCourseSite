import React from "react";
import "../css/CoursePage.css";

export default function CoursePage() {
  return (
    <>
      <center className="course-heading">Online Course</center>
      <div className="course-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                background: "url('./images/img1.png')",
                backgroundSize: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                background: "url('./images/img1.png')",
                backgroundSize: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                background: "url('./images/img1.png')",
                backgroundSize: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
