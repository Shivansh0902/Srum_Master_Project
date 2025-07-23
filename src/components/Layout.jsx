import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <nav className={styles.appNav}>
        <ul className={styles.navList}>
          {[
            { to: '/',      label: 'Backlog',   end: true },
            { to: '/sprints', label: 'Sprints' },
            { to: '/team',    label: 'Team'    },
            { to: '/analytics', label: 'Analytics' },
            { to: '/board',   label: 'Board'   },
            { to: '/timelog', label: 'Time Log' }
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className={styles.appMain}>
        <Outlet />
      </main>
    </>
  );
}
