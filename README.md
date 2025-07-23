# Scrum Master App

A lightweight, responsive web application for managing agile Scrum projects locally. Track your product backlog, plan sprints, assign tasks, view burndown charts, manage team members, and log time—all in one place.

---

## 📖 Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🛠 Project Overview

The **Scrum Master App** is a Single Page Application (SPA) built with React and Vite. It empowers small teams or solo developers to manage agile workflows without a backend by using browser `localStorage` for persistence and Chart.js for visual analytics.

### Key Features

- **Product Backlog**: Create, search, filter, edit, and delete tasks.
- **Sprint Planning**: Define sprints, select backlog items, edit sprint details.
- **Sprint Board**: Drag-and-drop tasks across statuses (Not Started, In Progress, Completed).
- **Burndown Chart**: Track sprint progress over time with ideal vs. actual remaining work.
- **Team Management**: Add, edit, and remove team members.
- **Analytics Dashboard**: Visualize tasks per team member.
- **Time Log**: Log daily minutes worked.
- **No Backend Required**: All data is stored locally in the browser.

---

## 🚀 Live Demo

Try the live application here:

[https://vercel.com/shivanh-chaddas-projects/scrum-master-app/9ZLHvfbSLGfXeP5x4VsekfY2nc7W](https://scrum-master-msnlzcsg8-shivanh-chaddas-projects.vercel.app)

---

## ⭐ Features

- **CRUD Operations**: Manage tasks, sprints, and team members.
- **Drag & Drop Sprint Board**: Powered by @hello-pangea/dnd for intuitive task movement.
- **Real-time Burndown Chart**: Visualize sprint progress with Chart.js.
- **Team Analytics**: Bar chart showing workload distribution.
- **LocalStorage Persistence**: No backend or database required.
- **Responsive Design**: Optimized for mobile and desktop.
- **Dark Theme**: Olive accents and CSS Modules for modern look.
- **React Router v6**: Seamless navigation between pages.
- **Custom Hooks**: Modular state management for tasks, sprints, burndown, and more.

---

## 🧰 Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** CSS Modules, CSS Variables
- **Charts:** Chart.js, react-chartjs-2
- **Drag & Drop:** @hello-pangea/dnd
- **Routing:** React Router v6
- **State Management:** React Hooks + localStorage
- **Deployment:** Vercel

---

## 🎯 Getting Started

### Prerequisites

- **Node.js** v16+ and **npm**

Verify installation:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**

     ```bash
     git clone https://github.com/Shivansh0902/Srum_Master_Project.git
     cd Srum_Master_Project/scrum-master-app/scrum-master-app
     ```

2. **Install dependencies**

     ```bash
     npm install
     ```

3. **Start the development server**

     ```bash
     npm run dev
     ```

4. **Open** your browser to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` — Start development server with hot module replacement.
- `npm run build` — Build for production (outputs to `dist` folder).
- `npm run preview` — Locally preview the production build.

---

## 📁 Folder Structure

```
scrum-master-app/
├─ public/                  # Static assets
├─ src/
│  ├─ assets/               # Images & icons
│  ├─ components/           # Shared UI (Layout, Nav, etc.)
│  ├─ hooks/                # Custom hooks (useTasks, useSprints, useBurndown, etc.)
│  ├─ pages/                # Page components & CSS modules
│  ├─ styles/               # Global CSS & variables
│  ├─ AppRoutes.jsx         # Route definitions
│  └─ main.jsx              # App entry point
├─ .vercel/                 # Vercel settings
├─ package.json
└─ vite.config.js
```

---

## 🤝 Contributing

Contributions are welcome! To propose a change:

1. **Fork** this repository.
2. **Create a feature branch**:
     ```bash
     git checkout -b feature/YourFeature
     ```
3. **Commit your changes**:
     ```bash
     git commit -m "feat: Add YourFeature"
     ```
4. **Push to your branch**:
     ```bash
     git push origin feature/YourFeature
     ```
5. **Open a Pull Request** on GitHub.

Please ensure code linting and tests pass before submitting. For major changes, open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 📬 Contact

Created by Shivansh Chadda.

- **GitHub:** [Shivansh0902](https://github.com/Shivansh0902)
- **Email:** `shivansh@example.com`

For feedback, questions, or collaboration, feel free to reach out!

