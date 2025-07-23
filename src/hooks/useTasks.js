import { useState } from 'react';

const STORAGE_KEY = 'scrumTasks';

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  function save(updated) {
    setTasks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function addTask(task) {
    save([ ...tasks, { ...task, status: 'Not Started' } ]);
  }

  function updateStatus(id, newStatus) {
    const updated = tasks.map((t, idx) => {
      if (idx !== id) return t;

      // stamp a completion date only when moving into “Completed”
      if (newStatus === 'Completed') {
        return { ...t, status: newStatus, completedDate: new Date().toISOString() };
      } else {
        // moving back to Not Started or In Progress: drop completedDate
        const { completedDate, ...rest } = t;
        return { ...rest, status: newStatus };
      }
    });
    save(updated);
  }

  function deleteTask(id) {
    const updated = tasks.filter((_, idx) => idx !== id);
    setTasks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function updateTask(id, newData) {
    const updated = tasks.map((t, idx) =>
      idx === id ? { ...t, ...newData } : t
    );
    setTasks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  return { tasks, addTask, updateStatus, deleteTask, updateTask };
}
