import React, { useState } from 'react';
import { useNavigate }    from 'react-router-dom';
import useSprints         from '../hooks/useSprints';
import styles            from './AddSprintPage.module.css';

export default function AddSprintPage() {
  const navigate = useNavigate();
  const { addSprint } = useSprints();

  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addSprint({ name, startDate, endDate });
    navigate('/sprints');
  }

  return (
    <div className={styles.container}>
      <h1>Add a New Sprint</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Sprint Name
          <input
            className={styles.input}
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            required
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className={styles.input}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            required
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            className={styles.input}
          />
        </label>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Confirm
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => navigate('/sprints')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
