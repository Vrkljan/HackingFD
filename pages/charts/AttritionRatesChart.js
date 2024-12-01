import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AttritionRatesChart = () => {
  const data = {
    labels: [
      'Medical',
      'Voluntary Release',
      'Academic Failure',
      'Disciplinary Issues',
      'Administrative',
      'Other',
    ],
    datasets: [
      {
        label: 'Attrition Rates',
        data: [8, 10, 5, 4, 2, 3],
        backgroundColor: '#60A5FA',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: '#fff' }, grid: { color: '#374151' } },
      y: { ticks: { color: '#fff' }, grid: { color: '#374151' } },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AttritionRatesChart;
