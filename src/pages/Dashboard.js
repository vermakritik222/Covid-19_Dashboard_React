/* eslint-disable no-duplicate-case */
import React, { useEffect, useState } from "react";
import CountCard from "../components/CountCard";
import MapCard from "../components/MapCard";
import Nav from "../components/Nav";
import RecoveryCard from "../components/RecoveryCard";
import DonationCard from "../components/DonationCard";
// import Requests from "../util/Requests";
import axios from "axios";
import "./sass/Dashboard.scss";

function Dashboard() {
  const [global, setGlobal] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios.get("https://api.covid19api.com/summary").then(function (response) {
        // console.log(response.data.Countries[0].Country);
        setGlobal(response.data.Global);
        // const data = [["Country", "Data"]];
        // const CountriesArray = response.data.Countries;
        // CountriesArray.forEach((el) => {
        // eslint-disable-next-line default-case
        // switch (el.Country) {
        //   case "Russian Federation":
        //     el.Country = "Russia";
        //     break;
        //   case "United States of America":
        //     el.Country = "United States";
        // break;
        // case "Syrian Arab Republic (Syria)":
        // el.Country = "Syria";
        // break;
        // case "Iran, Islamic Republic of":
        // el.Country = "Iran";
        // break;
        // case "Korea (South)":
        // el.Country = "South korea";
        // break;
        // case "Macedonia, Republic of":
        // el.Country = "Macedonia";
        // break;
        // case "Republic of Kosovo":
        // el.Country = "Kosovo";
        // break;
        // case "Taiwan, Republic of China":
        // el.Country = "Taiwan";
        // break;
        // case "Tanzania, United Republic of":
        // el.Country = "Tanzania";
        // break;
        // case "Venezuela (Bolivarian Republic)":
        // el.Country = "Venezuela";
        // break;
        // }
        // const temp = [el.Country, el.TotalConfirmed];
        // data.push(temp);
        // });
        // setMapData(data);
        // console.log(data);
      });

      axios
        .get("https://corona.lmao.ninja/v2/countries?yesterday&sort=cases")
        .then(function (response) {
          const data = [["Country", "Data"]];

          const CountriesArray = response.data;

          CountriesArray.forEach((el) => {
            switch (el.country) {
              case "UK":
                el.country = "United Kingdom";
                break;
              case "USA":
                el.country = "United States";
                break;
              case "S. Korea":
                el.country = "South korea";
                break;
              case "Libyan Arab Jamahiriya":
                el.country = "Libya";
                break;
              case "Syrian Arab Republic":
                el.country = "Syria";
                break;
              default:
                break;
            }
            const temp = [el.country, el.cases];
            data.push(temp);
          });
          setMapData(data);
          const countryData = [
            response.data[0],
            response.data[1],
            response.data[2],
            response.data[3],
          ];
          setTopData(countryData);
        });
    }
    fetchData();
  }, []);

  const totalCases1 = [
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
              // data="3,09,564"
              data={`${Math.floor(global?.TotalConfirmed / 10000) / 100}M`}
              graphData={totalCases1}
              graphDataLabels={labels}
            />
            <CountCard
              title="recovered"
              color="#49a571"
              data="95,829"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              data={`${
                Math.floor(
                  (global?.TotalConfirmed - global?.TotalDeaths) / 10000
                ) / 100
              }M`}
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
              data={`${Math.floor(global?.TotalDeaths / 100) / 10}K`}
              graphData={data}
              graphDataLabels={labels}
            />
          </div>
        </div>

        <div className="dashboard__body-sec2">
          <MapCard Data={mapData} DataTop={topData} />
        </div>
      </div>
      <div className="dashboard__body__right">
        <RecoveryCard
          affected={`${Math.floor(global?.TotalConfirmed / 10000) / 100}M`}
          recovered={`${
            Math.floor((global?.TotalConfirmed - global?.TotalDeaths) / 10000) /
            100
          }M`}
          present={"64.8"}
        />
        <DonationCard />
      </div>
    </div>
  );
}

export default Dashboard;
