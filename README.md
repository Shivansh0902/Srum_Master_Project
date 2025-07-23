# Scrum Master App

A lightweight, responsive web application for managing agile Scrum projects locally. Track your product backlog, plan sprints, assign tasks, view burndown charts, manage team members, and log time—all in one place.

---

## 📖 Table of Contents

* [Project Overview](#project-overview)
* [Live Demo](#live-demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Available Scripts](#available-scripts)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## 🛠 Project Overview

The **Scrum Master App** is a Single Page Application (SPA) built with React and Vite. It empowers small teams or solo developers to manage agile workflows without a backend by using browser `localStorage` for persistence and Chart.js for visual analytics.

Key features:

* **Product Backlog**: Create, search, filter, edit, and delete tasks.
* **Sprint Planning**: Define sprints, select backlog items, edit sprint details.
* **Sprint Board**: Drag-and-drop tasks across statuses (Not Started, In Progress, Completed).
* **Burndown Chart**: Track sprint progress over time with ideal vs. actual remaining work.
* **Team Management**: Add, edit, and remove team members.
* **Analytics Dashboard**: Visualize tasks per team member.
* **Time Log**: Log daily minutes worked.

---

## 🚀 Live Demo

Try the live application here:

[https://scrum-master-app.vercel.app](https://scrum-master-msnlzcsg8-shivanh-chaddas-projects.vercel.app)

---

## ⭐ Features

* **CRUD** for tasks, sprints, and team members
* **Drag & Drop** sprint board with @hello-pangea/dnd
* **Real-time Burndown Chart** via Chart.js
* **Analytics** bar chart for team workload
* **LocalStorage**-based persistence—no backend needed
* **Responsive** design for mobile & desktop
* **Dark theme** with olive accents and CSS Modules
* **React Router v6** for seamless navigation

---

## 🧰 Tech Stack

* **Framework:** React 19 + Vite 7
* **Styling:** CSS Modules, CSS Variables
* **Charts:** Chart.js, react-chartjs-2
* **DND:** @hello-pangea/dnd
* **Routing:** React Router v6
* **State:** React Hooks + localStorage
* **Deployment:** Vercel

---

## 🎯 Getting Started

### Prerequisites

* **Node.js** v16+ and **npm**

```bash
node -v
npm -v
```

### Installation

1. **Clone the repo**

   ```bash
   ```

git clone [https://github.com/Shivansh0902/Srum\_Master\_Project.git](https://github.com/Shivansh0902/Srum_Master_Project.git)
cd Srum\_Master\_Project/scrum-master-app/scrum-master-app

````
2. **Install dependencies**
   ```bash
npm install
````

3. **Start dev server**

   ```bash
   ```

npm run dev

```
4. **Open** your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` — start dev server with HMR
- `npm run build` — build for production (`dist` folder)
- `npm run preview` — locally preview production build

---

## 📁 Folder Structure

```

scrum-master-app/
├─ public/                  Static assets
├─ src/
│  ├─ assets/               Images & icons
│  ├─ components/           Shared UI (Layout, Nav)
│  ├─ hooks/                Custom hooks (useTasks, useSprints, useBurndown, etc.)
│  ├─ pages/                Page components & CSS modules
│  ├─ styles/               Global CSS & variables
│  ├─ AppRoutes.jsx         Route definitions
│  └─ main.jsx              App entry point
├─ .vercel/                 Vercel settings
├─ package.json
└─ vite.config.js

```

---

## 🤝 Contributing

Contributions are welcome! To propose a change:

1. Fork this repo.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "feat: Add YourFeature"`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

Please ensure code linting and tests pass before submitting.

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 📬 Contact

Created by Shivansh Chadda.

- **GitHub:** [Shivansh0902](https://github.com/Shivansh0902)
- **Email:** `chaddashivansh12@gmail.com`

For feedback, questions, or collaboration, feel free to reach out!

