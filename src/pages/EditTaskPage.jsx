// src/pages/EditTaskPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams }     from 'react-router-dom';
import useTasks                        from '../hooks/useTasks';
import useTeams                        from '../hooks/useTeams';
import styles                          from './EditTaskPage.module.css';

export default function EditTaskPage() {
  const { id } = useParams();
  const idx    = Number(id);
  const { tasks, updateTask } = useTasks();
  const { teams }            = useTeams();
  const task   = tasks[idx] || {};

  const [name, setName]         = useState('');
  const [description, setDesc]  = useState('');
  const [points, setPoints]     = useState(0);
  const [assignee, setAssignee] = useState('');
  const [type, setType]         = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDesc(task.description);
      setPoints(task.points);
      setAssignee(task.assignee);
      setType(task.type);
      setPriority(task.priority);
    }
  }, [task]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updateTask(idx, { name, description, points, assignee, type, priority });
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <h1>Edit Task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Task Name */}
        <label>
          Task Name
          <input
            className={styles.input}
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        {/* Description */}
        <label>
          Description
          <input
            className={styles.input}
            value={description}
            onChange={e => setDesc(e.target.value)}
          />
        </label>

        {/* Points */}
        <label>
          Story Points
          <input
            className={styles.input}
            type="number"
            min="0"
            value={points}
            onChange={e => setPoints(Number(e.target.value))}
          />
        </label>

        {/* Assignee (dynamic!) */}
        <label>
          Assignee
          <select
            className={styles.select}
            required
            value={assignee}
            onChange={e => setAssignee(e.target.value)}
          >
            <option value="" disabled hidden>
              Select assignee
            </option>
            {teams.map((m, i) => (
              <option key={i} value={m.name}>
                {m.name}
              </option>
            ))}
          </select>
        </label>

        {/* Type */}
        <label>
          Type
          <select
            className={styles.select}
            required
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="" disabled hidden>
              Select type
            </option>
            <option value="Story">Story</option>
            <option value="Bug">Bug</option>
          </select>
        </label>

        {/* Priority */}
        <label>
          Priority
          <select
            className={styles.select}
            required
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option value="" disabled hidden>
              Select priority
            </option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Save
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
