// src/pages/AddTaskPage.jsx
import React, { useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import useTasks            from '../hooks/useTasks';
import useTeams            from '../hooks/useTeams';
import styles              from './AddTaskPage.module.css';

export default function AddTaskPage() {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  const { teams }   = useTeams();

  const [name, setName]         = useState('');
  const [description, setDesc]  = useState('');
  const [points, setPoints]     = useState(0);
  const [assignee, setAssignee] = useState('');
  const [type, setType]         = useState('');
  const [priority, setPriority] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTask({ name, description, points, assignee, type, priority });
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <h1>Add Task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Task Name
          <input
            className={styles.input}
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Description
          <input
            className={styles.input}
            value={description}
            onChange={e => setDesc(e.target.value)}
          />
        </label>

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

        <label>
          Assignee
          <select
            className={styles.select}
            required
            value={assignee}
            onChange={e => setAssignee(e.target.value)}
          >
            <option value="" disabled>
              Select Assignee
            </option>
            {teams.map((member, i) => (
              <option key={i} value={member.name}>
                {member.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Type
          <select
            className={styles.select}
            required
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="Feature">Feature</option>
            <option value="Bug">Bug</option>
            <option value="Task">Task</option>
          </select>
        </label>

        <label>
          Priority
          <select
            className={styles.select}
            required
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </label>

        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Confirm
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
