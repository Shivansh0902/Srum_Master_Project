import { useState } from 'react';

const STORAGE_KEY = 'scrumTeams';

export default function useTeams() {
  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  function save(updated) {
    setTeams(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function addTeam(team) {
    save([...teams, team]);
  }

  function deleteTeam(id) {
    save(teams.filter((_, idx) => idx !== id));
  }

  // ← New
  function updateTeam(id, data) {
    const updated = teams.map((m, idx) =>
      idx === id ? { ...m, ...data } : m
    );
    save(updated);
  }

  return { teams, addTeam, deleteTeam, updateTeam };
}