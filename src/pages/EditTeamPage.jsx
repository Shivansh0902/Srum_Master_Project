import React, { useState, useEffect } from 'react';
import { useNavigate, useParams }     from 'react-router-dom';
import useTeams                       from '../hooks/useTeams';
import styles                         from './EditTeamPage.module.css';

export default function EditTeamPage() {
  const { id } = useParams();
  const idx    = Number(id);
  const { teams, updateTeam } = useTeams();
  const member = teams[idx] || {};

  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (member) {
      setName(member.name);
      setEmail(member.email);
    }
  }, [member]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updateTeam(idx, { name, email });
    navigate('/team');
  }

  return (
    <div className={styles.container}>
      <h1>Edit Team Member</h1>
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
            Save
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
