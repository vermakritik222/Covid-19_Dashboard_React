import React from "react";
import "./sass/RecoveryCard.scss";

function RecoveryCard(props) {
  const { affected, recovered, present } = props;
  const color = "#f95351";
  return (
    <div className="recoveryCard">
      <h2 className="recoveryCard__heading">Ratio of Recovery</h2>
      <div
        class="bar progress-loader"
        style={{
          height: "180px",
          width: "180px",
        }}
      >
        <svg>
          <circle
            style={{ stroke: color, strokeWidth: "26px" }}
            cx="50%"
            cy="50%"
            r="50%"
          ></circle>
        </svg>
        <h4 style={{ fontSize: "30px" }}>{present}%</h4>
      </div>
      <div className="recoveryCard__data">
        <div className="recoveryCard__affected">{`${affected}k Affected`}</div>
        <div className="recoveryCard__recovered">{`${recovered}k Recovered`}</div>
      </div>
    </div>
  );
}

export default RecoveryCard;
