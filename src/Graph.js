import React from "react";
import Plot from "./plot1.png";
import pm10 from "./pm10.png";
import temperature from "./temperature.png";

function Graph() {
  return (
    <div className="background">
      <div className="backdrop">
        <div className="card">
          <h1>Graph</h1>
          <div className="graph">
            <img
              src={Plot}
              alt="graph"
              style={{
                height: "15rem",
              }}
            />
            <img
              src={pm10}
              alt="graph"
              style={{
                height: "15rem",
              }}
            />
            <img
              src={temperature}
              alt="graph"
              style={{
                height: "15rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
