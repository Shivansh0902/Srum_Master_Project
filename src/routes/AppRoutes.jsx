import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddSprintPage from '../pages/AddSprintPage';
import AddTaskPage from '../pages/AddTaskPage';
import AddTeamPage from '../pages/AddTeamPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import BacklogPage from '../pages/BacklogPage';
import BurndownPage from '../pages/BurndownPage';
import EditSprintPage from '../pages/EditSprintPage';
import EditTaskPage from '../pages/EditTaskPage';
import EditTeamPage from '../pages/EditTeamPage';
import Layout from '../components/Layout';
import SelectBacklogPage from '../pages/SelectBacklogPage';
import SprintBoardPage from '../pages/SprintBoard';
import SprintDetailsPage from '../pages/SprintDetailsPage';
import SprintListPage from '../pages/SprintListPage';
import TeamPage from '../pages/TeamPage';
import TimeLogPage from '../pages/TimeLogPage';
// …you’ll add AnalyticsPage, SprintBoardPage, TimeLogPage later

export default function AppRoutes() {
  return (
    <Routes>
      {/* everything inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<BacklogPage />} />
        <Route path="add-task"  element={<AddTaskPage />} />
        <Route path="sprints"   element={<SprintListPage />} />
        <Route path="add-sprint" element={<AddSprintPage />} />
        <Route path="team"      element={<TeamPage />} />
        <Route path="add-team"  element={<AddTeamPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="board"     element={<SprintBoardPage />} />
        <Route path="timelog"   element={<TimeLogPage />} />
        <Route path="edit-task/:id" element={<EditTaskPage />} />
        <Route path="edit-sprint/:id" element={<EditSprintPage />} />
        <Route path="edit-team/:id" element={<EditTeamPage />} />
        <Route path="sprints/:id"     element={<SprintDetailsPage />} />
        <Route path="sprints/:id/select-backlog" element={<SelectBacklogPage />} />
        <Route path="burndown/:id" element={<BurndownPage />} />
        
        {/* Redirects */}
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}