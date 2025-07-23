import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSprints                from '../hooks/useSprints';
import useTasks                  from '../hooks/useTasks';
import styles                    from './SprintDetailsPage.module.css';

export default function SprintDetailsPage() {
  const { id } = useParams();
  const idx    = Number(id);
  const { sprints } = useSprints();
  const { tasks }   = useTasks();
  const navigate = useNavigate();

  const sprint = sprints[idx];
  // guard against missing tasks array
  const assignedTasks = (sprint?.tasks ?? []).map(tid => tasks[tid]);

  if (!sprint) {
    return (
      <div className={styles.container}>
        <p>Sprint not found.</p>
        <button
          className={styles.button}
          onClick={() => navigate('/sprints')}
        >
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{sprint.name}</h1>
        <p>
          {sprint.startDate} &rarr; {sprint.endDate}
        </p>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => navigate(`/sprints/${idx}/select-backlog`)}
        >
          Edit Backlog
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => navigate(`/burndown/${idx}`)}
        >
          View Burndown
        </button>
      </div>

      <h2>Assigned Tasks</h2>
      {assignedTasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        <ul className={styles.list}>
          {assignedTasks.map((t, i) => (
            <li key={i} className={styles.listItem}>
              {t.name} ({t.points} pts)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
