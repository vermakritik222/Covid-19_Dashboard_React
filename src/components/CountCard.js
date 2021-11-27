import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js";
import "./sass/CountCard.scss";

// Chart.register(CategoryScale)

function CountCard(props) {
  const { title, data, dec, color, graphData, graphDataLabels } = props;
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
            // labels: ["red", "blue", "green", "purple", "pink"],
            labels: graphDataLabels,
            datasets: [
              {
                data: graphData,
                fill: false,
                backgroundColor: "#f77e7ebd",
                borderColor: color,
                borderWidth: 4,
                borderCapStyle: "butt",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointRadius: 0,
                spanGaps: false,
              },
            ],
          }}
          options={{
            animations: {
              tension: {
                duration: 1000,
                easing: "linear",
                from: 0,
                to: 0.3,
                loop: false,
              },
            },
            // legend: {
            //   display: false,
            // },
            plugins: {
              legend: {
                display: false,
              },
            },
            // tooltips: {
            //   enabled: false,
            //   callbacks: {
            //     label: function (tooltipItem) {
            //       return tooltipItem.yLabel;
            //     },
            //   },
            // },
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "x",
            scales: {
              x: {
                display: false,
                ticks: {
                  stepSize: 2,
                  // fixedStepSize: 0,
                },
              },
              y: {
                display: false,
                ticks: {
                  stepSize: 10000,
                  // fixedStepSize: 0,
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
