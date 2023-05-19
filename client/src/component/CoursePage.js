import { React, useEffect, useState } from "react";
import "../css/CoursePage.css";

import axios from "axios";

export default function CoursePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios("http://localhost:5000/api/");
      setData(response.data);
    }
    fetchdata();
    console.log(data);
  });

  return (
    <>
      <center className="course-heading">Online Course</center>
      <div className="course-container">

        {data.map((datas) => {
          return (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    background:   `url(${datas.image})`,
                    backgroundSize: "100%",
                    backgroundSize: "cover",
                    backgroundPosition:"center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="flip-card-back">
                  <p className="title">{datas.name}</p>
                  <p>{datas.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
