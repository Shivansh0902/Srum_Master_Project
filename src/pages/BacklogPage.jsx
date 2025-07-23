import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTasks              from '../hooks/useTasks';
import useTeams              from '../hooks/useTeams';
import styles                from './BacklogPage.module.css';

export default function BacklogPage() {
  const { tasks, deleteTask } = useTasks();
  const { teams }            = useTeams();
  const navigate             = useNavigate();

  const [searchTerm, setSearchTerm]         = useState('');
  const [filterAssignee, setFilterAssignee] = useState('');
  const [filterType, setFilterType]         = useState('');
  const [filterPriority, setFilterPriority] = useState('');

  // apply all filters
  const filtered = tasks
    .filter(t =>
      !searchTerm ||
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(t => !filterAssignee || t.assignee === filterAssignee)
    .filter(t => !filterType     || t.type === filterType)
    .filter(t => !filterPriority || t.priority === filterPriority);

  const totalPoints = filtered.reduce((sum, t) => sum + t.points, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Product Backlog</h1>
        <Link to="/add-task">
          <button className={styles.editButton}>Add Task</button>
        </Link>
      </div>

      <div className={styles.stats}>
        {filtered.length} task{filtered.length !== 1 ? 's' : ''}, {totalPoints} point{totalPoints !== 1 ? 's' : ''}
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search tasks…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          value={filterAssignee}
          onChange={e => setFilterAssignee(e.target.value)}
        >
          <option value="">All Assignees</option>
          {teams.map((m,i) => (
            <option key={i} value={m.name}>{m.name}</option>
          ))}
        </select>

        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Story">Story</option>
          <option value="Bug">Bug</option>
        </select>

        <select
          value={filterPriority}
          onChange={e => setFilterPriority(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Assignee</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {filtered.map((t,i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>{t.points}</td>
              <td>{t.assignee}</td>
              <td>{t.type}</td>
              <td>{t.priority}</td>
              <td className={styles.actions}>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    if (window.confirm(`Delete task “${t.name}”?`)) {
                      deleteTask(i);
                    }
                  }}
                >
                  Delete
                </button>
                <button
                  className={styles.editButton}
                  onClick={() => navigate(`/edit-task/${i}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
