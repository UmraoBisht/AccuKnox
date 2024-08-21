# Vite App

This is a Vite-powered web application that includes a dynamic dashboard built with React, Shadcn UI, and Recharts. The dashboard displays various widgets, including pie charts and donut charts, representing different data categories.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Features](#features)

## Installation

To run this project locally, you'll need to have [Node.js](https://nodejs.org/) installed on your machine.

## Clone the repository:

   ```bash
   git clone https://github.com/UmraoBisht/AccuKnox.git
   cd AccuKnox
   ```
## Install dependencies:
   ```bash
   npm install
   ```
## Running the App:
   Once the dependencies are installed, you can run the app locally using Vite's development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server, and you can access the app at http://localhost:1573.
## Project Structure:
   Here's a brief overview of the project's structure:
 <pre>
    ├── node_modules/
    ├── public/
    │ └── index.html
    │
    ├── src/
    │ ├── assets/
    │ ├── components/
    │ │ ├── sub-components/
    │ │ │ ├── AddWidget.jsx
    │ │ │ ├── CWPDDashboard.jsx
    │ │ │ ├── ExecutiveDashboard.jsx
    │ │ │ ├── Navbar.jsx
    │ │ │ ├── RegistryScan.jsx
    │ │ │ └── WidgetRenderer.jsx
    │ │ ├── ui/
    │ ├── features/
    │ │ ├── dashboard/
    │ │ │ └── dashboardSlice.js
    │ ├── lib/
    │ ├── pages/
    │ │ └── Dashboard.jsx
    │ ├── store/
    │ ├── App.css
    │ ├── App.jsx
    │ ├── index.css
    │ ├── main.jsx
    │
    ├── .gitignore
</pre>
## Components:
  - **AddWidget.jsx:** Component for adding new widgets to the dashboard.
  - **CWPDDashboard.jsx:** Dashboard component for CWPP (Cloud Workload Protection Platform).
  - **ExecutiveDashboard.jsx:** Dashboard component for CSPM (Cloud Security Posture Management).
  - **Navbar.jsx:** The navigation bar component.
  - **RegistryScan.jsx:** Component for registry scanning and displaying related data.
  - **WidgetRenderer.jsx:** Renders widgets based on the configuration and data provided.
 
## Technologies Used:
  - **Vite:** Fast and lightweight build tool.
  - **React:** JavaScript library for building user interfaces.
  - **Shadcn UI:** Component library for building accessible and customizable UIs.
  - **Recharts:** Library for building charts in React.
  - **Redux Toolkit:** State management for React applications.

## Features

### 1. **Dynamic Dashboards**
   - **Multiple Dashboards**: The app supports multiple dashboards like CSPM Executive Dashboard, CWPP Dashboard, and Registry Scan.
   - **Dynamic Widget Rendering**: Each dashboard can render different widgets based on the provided data. Widgets are dynamically generated using data from a JSON file.

### 2. **Interactive Widgets**
   - **Pie Charts**: Visual representation of data in a pie chart format, with customizable colors and legends.
   - **Donut Charts**: Similar to pie charts but with a hollow center, used for displaying data like risk assessments.
   - **Progress Bars**: Horizontal progress bars to show percentage-based metrics like vulnerabilities or security issues.

### 3. **Widget Management**
   - **Add Widgets**: Users can dynamically add new widgets to the dashboard using the `AddWidget` component.
   - **Remove Widgets**: Widgets can be removed from the dashboard, providing flexibility in how data is presented.


### 4. **Customizable UI**
   - **Shadcn UI Integration**: The app uses Shadcn UI components for a modern and consistent design language.
   - **Theming and Styling**: Easily customizable CSS for components, allowing developers to adapt the app’s look and feel to their needs.

### 5. **Navigation**
   - **Navbar Component**: A navigation bar at the top of the app allows users to search widgets quickly.

### 6. **Fast and Efficient Development**
   - **Vite-Powered**: The app is built using Vite, providing fast development with hot module replacement and optimized builds.


