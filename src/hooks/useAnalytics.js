import useTasks from './useTasks';
import useTeams from './useTeams';

export default function useAnalytics() {
  const { tasks } = useTasks();
  const { teams } = useTeams();

  // Count tasks per team member
  const data = teams.map(member => {
    const count = tasks.filter(t => t.assignee === member.name).length;
    return { name: member.name, count };
  });

  return data;
}
