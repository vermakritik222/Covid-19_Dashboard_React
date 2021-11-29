import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js";
import "./sass/CountCard.scss";

function CountCard(props) {
  const { title, data, dec, color, colorbg, graphData, graphDataLabels } =
    props;
  return (
    <div className="countCard">
      <div className="countCard__content">
        <h3 className="countCard__title">
          {title}{" "}
          <span className="countCard__title-span">
            {dec ? (
              <ArrowDropDown style={{ fontSize: "35px", color: "#48b375" }} />
            ) : (
              <ArrowDropUp color="error" style={{ fontSize: "35px" }} />
            )}
          </span>
        </h3>
        <div className="countCard_data">{data}</div>
      </div>
      <div className="countCard__graph">
        <Line
          height={80}
          width={100}
          data={{
            labels: graphDataLabels,
            datasets: [
              {
                data: graphData,
                fill: true,
                backgroundColor: colorbg,
                borderColor: color,
                borderWidth: 2,
                borderCapStyle: "butt",
                pointBorderWidth: 2,
                pointHoverRadius: 3,
                pointRadius: 1,
                spanGaps: false,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },

            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "x",
            scales: {
              x: {
                display: false,
                ticks: {
                  stepSize: 2,
                },
              },
              y: {
                display: false,
                ticks: {
                  stepSize: 10000,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default CountCard;
