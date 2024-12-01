import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const RecruitmentVsAttritionChart = () => {
  const data = {
    labels: ['Q1-23', 'Q2-23', 'Q3-23', 'Q4-23', 'Q1-24', 'Q2-24'],
    datasets: [
      {
        label: 'Entry',
        data: [10, 15, 12, 20, 18, 22],
        borderColor: '#34D399',
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Attrition',
        data: [5, 8, 6, 10, 12, 9],
        borderColor: '#F472B6',
        backgroundColor: 'rgba(244, 114, 182, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
    scales: {
      x: { ticks: { color: '#fff' }, grid: { color: '#374151' } },
      y: { ticks: { color: '#fff' }, grid: { color: '#374151' } },
    },
  };

  return <Line data={data} options={options} />;
};

export default RecruitmentVsAttritionChart;
