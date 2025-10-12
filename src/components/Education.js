import React from "react";
import bg2 from "../asset/bg2.jpg";

function Education() {
  return (
    <section
      id="education"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        padding: "40px 8px",
        color: "#1d3e03",
      }}
    >
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "auto" }}>
        <center>
          <h2>Education</h2>
        </center>
        <ul className="timeline">
          <li>
            <h4>UG</h4>
            <h5>B.Tech Computer Science Engineering</h5>
            <p>Pimpri Chinchwad University (2023 - Present)</p>
          </li>
          <li>
            <h5>Higher Secondary</h5>
            <p>Amrita Vidyalayam Jr College (2021 - 2023)</p>
          </li>
          <li>
            <h5>Secondary School</h5>
            <p>Amrita Vidyalayam (2009 - 2021)</p>
          </li>
        </ul>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(204, 244, 59, 0.6)",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
}

export default Education;
