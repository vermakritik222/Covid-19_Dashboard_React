import React from "react";
import "./sass/TopAreaCard.scss";

function TopAreaCard(props) {
  const { color, affected, recorded, country } = props;
  return (
    <div className="topAreaCard">
      <div class="bar">
        <svg>
          <circle style={{ stroke: color }} cx="50%" cy="50%" r="50%"></circle>
        </svg>
        <h4>90%</h4>
      </div>
      <div className="topAreaCard__content">
        <h2 className="topAreaCard__title">{country}</h2>
        <div className="topAreaCard__mainbox">
          <div className="topAreaCard__affected">
            Affected - <span className="topAreaCard__number">{affected}</span>{" "}
          </div>
          <div className="topAreaCard__recorded">
            Recovered - <span className="topAreaCard__number">{recorded}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopAreaCard;
