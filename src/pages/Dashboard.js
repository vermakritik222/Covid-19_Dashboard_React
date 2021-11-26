import React from "react";
import CountCard from "../components/CountCard";
import Nav from "../components/Nav";
import "./sass/Dashboard.scss";

function Dashboard() {
  const data = [
    0, 2200, 3400, 3600, 4500, 4800, 5100, 5500, 6700, 7800, 7200, 9900,
  ];
  const labels = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__body">
        <div className="dashboard__body-sec1">
          <CountCard
            title="total cases"
            color="#fc312f"
            data="3,09,564"
            graphData={data}
            graphDataLabels={labels}
          />
          <CountCard
            title="recovered"
            color="#49a571"
            data="95,829"
            dec
            graphData={data}
            graphDataLabels={labels}
          />
          <CountCard
            title="active cases"
            color="#fc312f"
            data="1,99,564"
            graphData={data}
            graphDataLabels={labels}
          />
          <CountCard
            title="total death"
            color="#fc312f"
            data="13,064"
            graphData={data}
            graphDataLabels={labels}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
