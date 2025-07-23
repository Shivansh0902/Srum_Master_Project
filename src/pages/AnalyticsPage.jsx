import React from 'react';
import { Bar } from 'react-chartjs-2';
import useAnalytics from '../hooks/useAnalytics';
import styles       from './AnalyticsPage.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  const analytics = useAnalytics();
  console.log('analytics data:', analytics);

  const labels = analytics.map(a => a.name);
  const counts = analytics.map(a => a.count);

  const data = {
    labels,
    datasets: [
      {
        label: 'Tasks Assigned',
        data: counts,
        backgroundColor: 'rgba(46,125,50,0.6)',  // theme primary with opacity
        borderColor:     'rgba(46,125,50,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#2E2E2E' }, // var(--text)
        position: 'top'
      },
      title: {
        display: true,
        text: 'Tasks per Team Member',
        color: '#2E2E2E'            // var(--text)
      },
    },
    scales: {
      x: {
        ticks: { color: '#555555' }, // var(--text-light)
        grid:  { color: '#E0E0E0' }  // var(--border)
      },
      y: {
        ticks: { color: '#555555' },
        grid:  { color: '#E0E0E0' }
      }
    },
  };

  return (
    <div className={styles.container}>
      <h1>Member Analytics</h1>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
