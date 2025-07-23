// src/pages/SprintListPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSprints      from '../hooks/useSprints';
import styles          from './SprintListPage.module.css';

export default function SprintListPage() {
  const { sprints, deleteSprint } = useSprints();
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>List of Sprints</h1>
        <button
          className={styles.addButton}
          onClick={() => navigate('/add-sprint')}
        >
          Add Sprint
        </button>
      </header>

      {sprints.length === 0 ? (
        <p className={styles.empty}>No sprints found. Please add one.</p>
      ) : (
        <ul className={styles.list}>
          {sprints.map((s, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.info}>
                <strong>{s.name}</strong>
                <span className={styles.dates}>
                  {s.startDate} → {s.endDate}
                </span>
              </div>
              <div className={styles.buttons}>
                <button
                  className={`${styles.button} ${styles.view}`}
                  onClick={() => navigate(`/sprints/${i}`)}
                >
                  View
                </button>
                <button
                  className={`${styles.button} ${styles.edit}`}
                  onClick={() => navigate(`/edit-sprint/${i}`)}
                >
                  Edit
                </button>
                <button
                  className={`${styles.button} ${styles.delete}`}
                  onClick={() => {
                    if (window.confirm('Delete this sprint?')) {
                      deleteSprint(i);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
