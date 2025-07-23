import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTasks   from '../hooks/useTasks';
import useSprints from '../hooks/useSprints';
import styles     from './SelectBacklogPage.module.css';

export default function SelectBacklogPage() {
  const { id } = useParams();
  const idx    = Number(id);
  const { tasks } = useTasks();
  const { sprints, updateSprint } = useSprints();
  const sprint = sprints[idx] ?? {};

  // seed selected from sprint.tasks (or empty array)
  const [selected, setSelected] = useState(sprint.tasks ?? []);
  const navigate = useNavigate();

  function toggleTask(tid) {
    setSelected(prev =>
      prev.includes(tid)
        ? prev.filter(x => x !== tid)
        : [...prev, tid]
    );
  }

  function handleSave() {
    updateSprint(idx, { tasks: selected });
    navigate(`/sprints/${idx}`);
  }

  return (
    <div className={styles.container}>
      <h1>Select Backlog for {sprint.name}</h1>

      <ul className={styles.list}>
        {tasks.map((t, tid) => (
          <li key={tid} className={styles.item}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(tid)}
                onChange={() => toggleTask(tid)}
              />
              {t.name} — {t.points} pts
            </label>
          </li>
        ))}
      </ul>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className={`${styles.button} ${styles.cancel}`}
          onClick={() => navigate(`/sprints/${idx}`)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
