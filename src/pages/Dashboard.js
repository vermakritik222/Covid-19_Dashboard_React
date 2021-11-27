import React from "react";
import CountCard from "../components/CountCard";
import MapCard from "../components/MapCard";
import Nav from "../components/Nav";
import RecoveryCard from "../components/RecoveryCard";
import DonationCard from "../components/DonationCard";
import "./sass/Dashboard.scss";

function Dashboard() {
  const totalCases = [
    0, 2200, 2500, 9600, 8500, 7800, 6100, 5500, 7700, 7800, 7900, 800,
  ];
  const data = [
    0, 2200, 3400, 3600, 4500, 4800, 5100, 5500, 6700, 7800, 7200, 9900,
  ];
  const labels = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__body">
        <div className="dashboard__body-sec1-cover">
          <div className="dashboard__body-sec1">
            <CountCard
              title="total cases"
              color="#fc312f"
              data="3,09,564"
              graphData={totalCases}
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

        <div className="dashboard__body-sec2">
          <MapCard />
        </div>
      </div>
      <div className="dashboard__body__right">
        <RecoveryCard affected={"302.8"} recovered={"95.7"} present={"64.8"} />
        <DonationCard />
      </div>
    </div>
  );
}

export default Dashboard;
