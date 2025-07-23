import { useState, useEffect } from 'react';

const STORAGE_KEY = 'scrumSprints';


export default function useSprints() {
  const [sprints, setSprints] = useState(() => {
    // load once from storage
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  function save(updated) {
    setSprints(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function addSprint({ name, startDate, endDate }) {
  const newSprint = { name, startDate, endDate, tasks: [] };
  save([...sprints, newSprint]);
  }

  function deleteSprint(id) {
    save(sprints.filter((_, idx) => idx !== id));
  }

  // ← New
  function updateSprint(id, data) {
    const updated = sprints.map((sp, idx) =>
      idx === id ? { ...sp, ...data } : sp
    );
    save(updated);
  }

  return { sprints, addSprint, deleteSprint, updateSprint };
}