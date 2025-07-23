import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTeams from '../hooks/useTeams';
import styles from './TeamPage.module.css';

export default function TeamPage() {
  const { teams, deleteTeam } = useTeams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Team Members</h1>
        <Link to="/add-team">
          <button className={styles.button} type="button">
            Add Member
          </button>
        </Link>
      </header>

      {teams.length === 0 ? (
        <p>No team members yet. Click “Add Member” to start.</p>
      ) : (
        <ul className={styles.list}>
          {teams.map((m, i) => (
            <li key={i} className={styles.item}>
              <span>
                {m.name} &lt;{m.email}&gt;
              </span>
              <span className={styles.buttons}>
                <button
                  className={`${styles.button} ${styles.delete}`}
                  onClick={() =>
                    window.confirm('Remove this team member?') &&
                    deleteTeam(i)
                  }
                >
                  Delete
                </button>
                <button
                  className={`${styles.button} ${styles.edit}`}
                  onClick={() => navigate(`/edit-team/${i}`)}
                >
                  Edit
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
