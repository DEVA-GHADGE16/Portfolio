import React from "react";
import bg6 from "../asset/bg6.jpg";

function Hobbies() {
  return (
    <section
      id="hobbies"
      style={{
        backgroundImage: `url(${bg6})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        padding: "40px 8px",
        color: "#0f0301",
      }}
    >
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1000px", margin: "auto" }}>
        <h1 className="text-center mb-4">Hobbies</h1>
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>🏏 Cricket</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>📷 Photography</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>💪🏻 Bodybuilding</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>💻 Coding</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>🎶 Music</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(205, 194, 202, 0.6)",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
}

export default Hobbies;
