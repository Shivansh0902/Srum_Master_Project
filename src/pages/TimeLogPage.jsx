import React, { useState } from 'react';
import useTimeLogs         from '../hooks/useTimeLogs';
import styles              from './TimeLogPage.module.css';

export default function TimeLogPage() {
  const { logs, addLog } = useTimeLogs();

  const [date, setDate]       = useState('');
  const [minutes, setMinutes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addLog({ date, minutes: Number(minutes) });
    setDate('');
    setMinutes('');
  }

  return (
    <div className={styles.container}>
      <h1>Time & Date Tracking</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Date
          <input
            className={styles.input}
            type="date"
            required
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label>
          Minutes
          <input
            className={styles.input}
            type="number"
            min="0"
            required
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.button}>
          Log Time
        </button>
      </form>

      {logs.length === 0 ? (
        <p>No time logged yet.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Minutes</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l, i) => (
              <tr key={i}>
                <td>{l.date}</td>
                <td>{l.minutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
