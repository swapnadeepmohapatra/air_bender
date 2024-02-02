import React from "react";
import { useNavigate } from "react-router-dom";

// Accuracy: 0.9983328312411306
// MAE: 0.4582866319055278
// RMSE: 1.6256645871301387

function Mertics() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="backdrop">
        <div className="card">
          <h1>Metrics</h1>
          <div className="metrics">
            <div className="metric">
              <h2>Accuracy</h2>
              <p>99.83%</p>
            </div>
            <div className="metric">
              <h2>MAE</h2>
              <p>0.45</p>
            </div>
            <div className="metric">
              <h2>RMSE</h2>
              <p>1.62</p>
            </div>
          </div>
        </div>
        <button
          className="submit_button"
          onClick={() => {
            navigate("/graph");
          }}
        >
          Show the timeseries graph
        </button>
      </div>
    </div>
  );
}

export default Mertics;
