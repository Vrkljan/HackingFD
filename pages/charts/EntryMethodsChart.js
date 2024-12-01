import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const EntryMethodsChart = () => {
  const data = {
    labels: ['LOG', 'MOSIDDED', 'ROTP / DEO', 'OT', 'VIEP'],
    datasets: [
      {
        data: [20, 30, 25, 15, 10],
        backgroundColor: ['#4ADE80', '#60A5FA', '#F472B6', '#FACC15', '#34D399'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: '#fff' },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default EntryMethodsChart;
