---

# Expense Tracker App

A full-stack expense tracker application that allows users to sign up, log in, and view their financial transactions. The project features a modern React-based frontend with a responsive dashboard and a RESTful Express/MongoDB backend to manage user authentication and transaction data.

# Demo
![WhatsApp Image 2025-03-03 at 18 55 22_96af871f](https://github.com/user-attachments/assets/11909142-72fa-480f-957f-ef2dd4fe66b1)
![WhatsApp Image 2025-03-03 at 19 30 25_c5ae7dc3](https://github.com/user-attachments/assets/0b542529-2ba3-483f-bcb7-f70c7855f813)
![WhatsApp Image 2025-03-03 at 20 08 51_7155d0e4](https://github.com/user-attachments/assets/48eb7824-fde8-4569-8d01-13513d31fa4e)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Expense Tracker App is designed to help users manage and visualize their income and expenses. The client-side is built with React, using React Router for navigation, Context API for state management, and Recharts for dynamic data visualization. The server-side is built with Node.js and Express, providing secure user authentication using JWT and bcrypt, and managing transaction data stored in MongoDB.

## Features

- **User Authentication:** Secure signup and login using JWT tokens and cookie-based sessions.
- **Dashboard:** Visual overview with a line chart showing the cumulative balance trend over time.
- **Transaction History:** Detailed table view of recent transactions with formatted dates and currency.
- **Protected Routes:** Client-side route protection ensuring that only authenticated users can access dashboard and transaction history.
- **Dummy Data Seeding:** A script to generate dummy transactions and users for testing purposes.
- **Responsive Design:** A modern UI using Tailwind CSS utility classes for a clean, responsive layout.

## Tech Stack

### Frontend
- **React** – Component-based UI library.
- **React Router** – Client-side routing.
- **Context API** – Global state management.
- **Recharts** – Data visualization library for charts.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Material UI** – Component-based UI library.

### Backend
- **Node.js & Express** – Server runtime and framework.
- **MongoDB & Mongoose** – NoSQL database and ODM for data management.
- **JWT & bcrypt** – Authentication and password hashing.
- **dotenv** – Environment variable management.
- **Faker.js** – Dummy data generation for seeding the database.

## Folder Structure

Below is an overview of the main project directories and files:

```
├── client/                   # React client application
│   ├── src/
│   │   ├── components/       # Reusable React components (Dashboard, Sidebar, etc.)
│   │   ├── pages/            # Page components (LandingPage, Login, Signup)
│   │   ├── utils/            # Utility functions and context (GlobalContext, ProtectedRoute)
│   │   ├── App.jsx           # Main application component with routing
│   │   └── main.jsx          # Entry point rendering the React app
│   └── index.css             # Global styles (likely using Tailwind CSS)
│
└── server/                   # Express backend application
    ├── Controllers/          # Request handler functions (AuthController, transactionController)
    ├── Models/               # Mongoose models (userModel, transactionModel)
    ├── Routes/               # API route definitions (AuthRoute, transaction)
    ├── utils/                # Middleware and helper utilities (AuthMiddleware, SecretToken)
    ├── dbConnect.js          # MongoDB connection setup
    ├── dummyData.js          # Script to seed the database with dummy data
    └── server.js             # Main server file that initializes Express
```

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud-based)

### Client Setup

1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Server Setup

1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the server root and configure the following variables:
   ```
   PORT=5000
   DB_URI=your_mongodb_connection_string
   TOKEN_KEY=your_jwt_secret_key
   ```
4. (Optional) Seed the database with dummy data:
   ```bash
   node dummyData.js
   ```
5. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

## Usage

- **Signup & Login:** Create an account or log in using your email and password.
- **Dashboard:** View your total balance, income, expense, and see a line chart displaying your cumulative balance over time.
- **Transaction History:** Review your transactions in a detailed table format.
- **Income:** Add income on daily basis and it will be updated in transaction history.
- **Expense:** Add expense on daily basis and it will be updated in transaction history and will provide updated balance in the dashboard.
- **Protected Routes:** Only authenticated users can access the dashboard and transaction history pages.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
