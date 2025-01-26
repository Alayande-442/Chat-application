OllyChart

<!-- COMMENT -->

OllyChart is a real-time chat application designed to connect people and facilitate seamless communication. With its modern interface and responsive design, OllyChart ensures a smooth and engaging user experience.

<!-- COMMENT FEATURES -->

Features
Real-time messaging using Socket.io.
User authentication and authorization.
Responsive UI built with React and styled using DaisyUI.
Backend API powered by Node.js and Express.
Data storage and retrieval with MongoDB.

<!-- COMMENT TECH STACK -->

Tech Stack
Frontend: React, DaisyUI
Backend: Node.js, Express.js
Database: MongoDB
Real-Time Communication: Socket.io

<!-- COMMENT PROJECT ARCHITURE -->

Project Architecture
Overview
The project follows a client-server architecture:

Client (Frontend):
The frontend is built with React and styled using DaisyUI. It handles the user interface, routing, and communication with the backend.
Server (Backend):
The backend is powered by Node.js and Express. It provides RESTful APIs for authentication, user management, and data storage.
Real-Time Communication:
Socket.io enables real-time chat functionality, ensuring messages are delivered instantly.
Database:
MongoDB is used to store user data, chat histories, and other necessary information.

<!-- COMMENT DIRECTORIES STRUCTURE -->

OllyChart/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Page components
│ │ ├── hooks/ # Custom hooks
│ │ ├── utils/ # Utility functions
│ │ └── styles/ # Styles and themes
├── server/ # Node.js backend
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB schemas
│ ├── utils/ # Helper functions
│ └── socket/ # Socket.io implementation
└── README.md
