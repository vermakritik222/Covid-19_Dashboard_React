import React from "react";
import "./sass/MapCard.scss";
import { Chart } from "react-google-charts";

function MapCard() {
  return (
    <div className="mapCard">
      <h2 className="mapCard__title">COVID - 19 Affected Areas </h2>
      <div className="mapCard__content">
        <Chart
          width={500}
          height={300}
          chartType="GeoChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Coountry", "Popularity"],
            ["Germany", 200],
            ["United States", 300],
            ["Brazil", 400],
          ]}
          options={{
            intervals: { style: "sticks" },
            legend: "none",
          }}
        />
      </div>
    </div>
  );
}

export default MapCard;
