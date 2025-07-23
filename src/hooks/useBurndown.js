import { useMemo } from 'react';
import useSprints    from './useSprints';
import useTasks      from './useTasks';
import { differenceInCalendarDays, parseISO, addDays, format } from 'date-fns';

export default function useBurndown(sprintId) {
  const { sprints } = useSprints();
  const { tasks }   = useTasks();

  const sprint      = sprints[sprintId] ?? {};
  const sprintTasks = Array.isArray(sprint.tasks) ? sprint.tasks : [];

  return useMemo(() => {
    if (!sprint.startDate || !sprint.endDate) {
      return { labels: [], ideal: [], actual: [] };
    }

    // parse dates
    const start = parseISO(sprint.startDate);
    const end   = parseISO(sprint.endDate);

    // total days in sprint
    const totalDays = differenceInCalendarDays(end, start) + 1;

    // array of each sprint date
    const dates = Array.from({ length: totalDays }, (_, i) => addDays(start, i));

    // compute total points
    const totalPoints = sprintTasks.reduce(
      (sum, id) => sum + (tasks[id]?.points || 0),
      0
    );

    // ideal remaining line
    const ideal = dates.map((_, i) =>
      Math.max(0, totalPoints - (totalPoints / (totalDays - 1)) * i)
    );

    // actual remaining line based on completedDate
    const actual = dates.map(date => {
      const donePoints = sprintTasks
        .filter(id => {
          const cd = tasks[id]?.completedDate;
          return cd && parseISO(cd) <= date;
        })
        .reduce((sum, id) => sum + (tasks[id]?.points || 0), 0);
      return totalPoints - donePoints;
    });

    // human‐readable labels: e.g. "Jun 5"
    const labels = dates.map(d => format(d, 'MMM d'));

    return { labels, ideal, actual };
  }, [sprintTasks, sprint.startDate, sprint.endDate, tasks]);
}
