import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const commanders_critical = () => {
  const criticalTrades = [
    { trade: "00005 CRMN", isHighlighted: false },
    { trade: "00010 INFMN", isHighlighted: false },
    { trade: "00019 AES OP", isHighlighted: false },
    { trade: "00021 FLT ENGR", isHighlighted: false },
    { trade: "00099 INT OP", isHighlighted: false },
    { trade: "00100 MET TECH", isHighlighted: false },
    { trade: "00101 SAR TECH", isHighlighted: false },
    { trade: "00105 BOSN", isHighlighted: false },
    { trade: "00109 ATIS TECH", isHighlighted: false },
    { trade: "00200 COMAN RSCH", isHighlighted: true },
    { trade: "00129 VEH TECH", isHighlighted: true },
    { trade: "00130 W TECH L", isHighlighted: true },
    { trade: "00134 MAT TECH", isHighlighted: true },
    { trade: "00135 AVN TECH", isHighlighted: true },
  ];

  const chartData = {
    labels: ["q1 23", "q2 23", "q3 23", "q4 23", "q1 24", "q2 24"],
    datasets: [
      {
        label: "Recruits",
        data: [540, 430, 330, 345, 550, 330],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Number of recruits by quarter",
        font: {
          size: 16,
        },
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        max: 550,
      },
    },
  };

  const sipData = [
    { region: "AB", value: 119, trend: "up" },
    { region: "NL", value: 102, trend: "up" },
    { region: "PEI", value: 101, trend: "up" },
    { region: "NS", value: 98, trend: "up" },
    { region: "NB", value: 94, trend: "up" },
    { region: "ON", value: 82, trend: "up" },
    { region: "QC", value: 81, trend: "up" },
    { region: "SK", value: 51, trend: "down" },
    { region: "MB", value: 42, trend: "down" },
    { region: "BC", value: 10, trend: "down" },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">VADI - Commander's Critical Recruiting Report</h1>
      <p className="text-gray-400 text-sm mb-6">Last Updated: 2024.11.01.0732h EST</p>

      <div className="grid grid-cols-4 gap-6">
        {/* Critical Trades Section */}
        <div className="col-span-1 bg-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Critical Trades</h3>
          <ul className="list-none space-y-2">
            {criticalTrades.map((trade, index) => (
              <li
                key={index}
                className={
                  trade.isHighlighted ? "text-red-500 font-bold" : "text-white"
                }
              >
                {trade.trade}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Section */}
        <div className="col-span-3 grid grid-cols-4 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">SIP Target</h3>
            <p className="text-xl">8484 / 10000</p>
            <p className="text-gray-400 text-sm">2023 Recruiting Target</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Avg Time to OFP</h3>
            <p className="text-xl">1.7 Years</p>
            <p className="text-gray-400 text-sm">2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Army</h3>
            <p className="text-xl">5551 / 7000</p>
            <p className="text-gray-400 text-sm">2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Navy</h3>
            <p className="text-xl">1211 / 2000</p>
            <p className="text-gray-400 text-sm">2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Air</h3>
            <p className="text-xl">753 / 1000</p>
            <p className="text-gray-400 text-sm">2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">2023 Officer Target</h3>
            <p className="text-xl">1252 / 2500</p>
            <p className="text-green-500">▲ 328 Since Last Quarter</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">2023 NCM Target</h3>
            <p className="text-xl">7232 / 7500</p>
            <p className="text-green-500">▲ 782 Since Last Quarter</p>
          </div>
          <div className="col-span-2 bg-gray-700 p-6 rounded-lg">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* SIP Target Report Quarterly Comparison */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          SIP Target Report Quarterly Comparison
        </h2>
        <div className="grid grid-cols-10 gap-4">
          {sipData.map((data, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center bg-gray-700 ${
                data.trend === "up" ? "border-green-500 border" : "border-red-500 border"
              }`}
            >
              <h4 className="text-lg font-semibold">{data.region}</h4>
              <p className="text-xl">{data.value}</p>
              <p className={data.trend === "up" ? "text-green-500" : "text-red-500"}>
                {data.trend === "up" ? "▲" : "▼"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default commanders_critical;
