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
            height={450}
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
            affected="49,050k"
            recorded="47,328k"
            country="USA"
          />
          <TopAreaCard
            color="#484879"
            affected="34,053k"
            recorded="32,550k"
            country="India"
          />
          <TopAreaCard
            color="red"
            affected="22,574k"
            recorded="18,306k"
            country="Brazil"
          />
          <TopAreaCard
            color="violet"
            affected="10,174k"
            recorded="7,306k"
            country="UK"
          />
        </div>
      </div>
    </div>
  );
}

export default MapCard;
