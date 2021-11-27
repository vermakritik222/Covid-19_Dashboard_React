import React from "react";
import "./sass/MapCard.scss";
import { Chart } from "react-google-charts";
import TopAreaCard from "./TopAreaCard";

function MapCard() {
  return (
    <div className="mapCard">
      <h2 className="mapCard__title">COVID - 19 Affected Areas </h2>
      <div className="mapCard__content">
        <div className="mapCard__map">
          <Chart
            width={555}
            height={300}
            chartType="GeoChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Country", "Popularity"],
              ["Germany", 200],
              ["United States", 300],
              ["Brazil", 400],
              ["india", 500],
              ["pakistan", 300],
              ["china", 800],
              ["italy", 600],
              ["russia", 500],
              ["Australia", 488],
              ["japan", 390],
            ]}
            options={{
              intervals: { style: "sticks" },
              legend: "none",
              // colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
              // backgroundColor: "#ffc4c4",
              // datalessRegionColor: "#f8bbd0",
              // defaultColor: "#f5f5f5",
              // is3D: true,
            }}
          />
        </div>
        <div className="mapCard__topAreas">
          <TopAreaCard
            color="#48b375"
            affected="20,003k"
            recorded="3,230k"
            country="china"
          />
          <TopAreaCard
            color="#484879"
            affected="23,053k"
            recorded="9,550k"
            country="Italy"
          />
          <TopAreaCard
            color="red"
            affected="83,174k"
            recorded="5,306k"
            country="USA"
          />
        </div>
      </div>
    </div>
  );
}

export default MapCard;
