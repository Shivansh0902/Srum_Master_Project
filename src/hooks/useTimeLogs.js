import { useState } from 'react';

const STORAGE_KEY = 'scrumTimeLogs';

export default function useTimeLogs() {
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  function addLog(entry) {
    const updated = [...logs, entry];
    setLogs(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  return { logs, addLog };
}
