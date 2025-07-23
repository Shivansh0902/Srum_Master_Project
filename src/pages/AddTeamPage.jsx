import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTeams from '../hooks/useTeams';
import styles from './AddTeamPage.module.css';
import { useState } from 'react';

export default function AddTeamPage() {
  const navigate = useNavigate();
  const { addTeam } = useTeams();

  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTeam({ name, email });
    navigate('/team');
  }

  return (
    <div className={styles.container}>
      <h1>Add Team Member</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            className={styles.input}
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            Confirm
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => navigate('/team')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}