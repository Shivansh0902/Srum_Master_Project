import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import useBurndown from '../hooks/useBurndown';
import styles      from './BurndownPage.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BurndownPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { labels, ideal, actual } = useBurndown(Number(id));

  const data = {
    labels,
    datasets: [
      {
        label: 'Ideal',
        data: ideal,
        borderColor: 'rgba(46,125,50,0.6)',
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
        tension: 0.2
      },
      {
        label: 'Actual',
        data: actual,
        borderColor: 'rgba(46,125,50,1)',
        backgroundColor: 'rgba(46,125,50,0.2)',
        pointRadius: 4,
        pointBackgroundColor: 'rgba(46,125,50,1)',
        fill: true,
        tension: 0.2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,     // allow container to size the chart
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        labels: { color: 'var(--text)', boxWidth: 20 }
      },
      title: {
        display: true,
        text: 'Sprint Burndown',
        color: 'var(--text)',
        font: { size: 20 }
      },
      tooltip: {
        bodyColor: 'var(--text)',
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'var(--text-light)',
          maxRotation: 45,
          minRotation: 45,
          autoSkip: true,
          maxTicksLimit: 10
        },
        grid: { color: 'var(--border)' }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'var(--text-light)',
          stepSize: 1
        },
        grid: { color: 'var(--border)' }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Sprint Burndown</h1>
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
      <div className={styles.chartWrapper}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
