import React, { useState, useEffect } from 'react';
import { useNavigate, useParams }      from 'react-router-dom';
import useSprints                      from '../hooks/useSprints';
import styles                          from './EditSprintPage.module.css';

export default function EditSprintPage() {
  const { id } = useParams();
  const idx    = Number(id);
  const { sprints, updateSprint } = useSprints();
  const sprint = sprints[idx] || {};

  const [name, setName]       = useState('');
  const [startDate, setStart] = useState('');
  const [endDate, setEnd]     = useState('');

  useEffect(() => {
    if (sprint) {
      setName(sprint.name);
      setStart(sprint.startDate);
      setEnd(sprint.endDate);
    }
  }, [sprint]);

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    updateSprint(idx, { name, startDate, endDate });
    navigate('/sprints');
  }

  return (
    <div className={styles.container}>
      <h1>Edit Sprint</h1>
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
            className={styles.input}
            type="date"
            required
            value={startDate}
            onChange={e => setStart(e.target.value)}
          />
        </label>
        <label>
          End Date
          <input
            className={styles.input}
            type="date"
            required
            value={endDate}
            onChange={e => setEnd(e.target.value)}
          />
        </label>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Save
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
