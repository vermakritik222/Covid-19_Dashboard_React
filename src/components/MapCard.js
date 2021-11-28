import React from "react";
import "./sass/MapCard.scss";
import { Chart } from "react-google-charts";
import TopAreaCard from "./TopAreaCard";

function MapCard(props) {
  const { Data, DataTop } = props;
  console.log(DataTop);
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
            data={Data}
            // data={[
            // ["Country", "Data"],
            // ["Bahamas", 200],
            // ["Macedonia", 300],
            // ["Vatican", 400],
            // ["Micronesia", 500],
            // ["Kosovo", 300],
            // ["Taiwan", 800],
            // ["Tanzania", 600],
            // ["Venezuela", 500],
            //   ["United Arab Emirates", 488],
            //   ["Zimbabwe", 390],
            // ]}
            options={{
              intervals: { style: "sticks" },
              legend: "none",
              colorAxis: { colors: ["#48b375", "#fc312f"] },
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
            affected={`${Math.floor((DataTop[0]?.cases * 1) / 10000) / 100}M`}
            recorded={`${
              Math.floor((DataTop[0]?.recovered * 1) / 10000) / 100
            }M`}
            country={DataTop[0]?.countryInfo.iso3}
          />
          <TopAreaCard
            color="#484879"
            affected={`${Math.floor((DataTop[1]?.cases * 1) / 10000) / 100}M`}
            recorded={`${
              Math.floor((DataTop[1]?.recovered * 1) / 10000) / 100
            }M`}
            country={DataTop[1]?.country}
          />
          <TopAreaCard
            color="red"
            affected={`${Math.floor((DataTop[2]?.cases * 1) / 10000) / 100}M`}
            recorded={`${
              Math.floor((DataTop[2]?.recovered * 1) / 10000) / 100
            }M`}
            country={DataTop[2]?.country}
          />
          <TopAreaCard
            color="violet"
            affected={`${Math.floor((DataTop[3]?.cases * 1) / 10000) / 100}M`}
            recorded={`${
              Math.floor((DataTop[3]?.recovered * 1) / 10000) / 100
            }M`}
            country={DataTop[3]?.country}
          />
        </div>
      </div>
    </div>
  );
}

export default MapCard;
