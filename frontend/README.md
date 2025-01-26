<!-- COMMENT PROJECT DOCUMENTATION  -->

<!-- PROJECT SETUP COMMENT INSTRUCTION -->
<!-- FOLLOW THE STEPS BELOW -->

1. git clone https://github.com/Alayande-442/Chat-application.git
2. cd chat-application
3. install dependencies.
   <!-- COMMENT SERVER ENTRY -->
   cd backend
   npm install

<!-- COMMENT CLIENT SIDE ENTRY -->

cd frontend
npm install

<!-- COMMENT CONFIGURE ENVIRONMENT VARIABLE -->

4. CREATE .env file for both server and client side configuration
   E.G:MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   SOCKET_PORT=5001

<!--  -->

5. RUN THE APPLICATION
   cd backend
   npm run dev

<!--  -->

cd frontend
npm run dev

6. Access the App
   Open your browser and navigate to http://localhost:5173.

COMMENT Usage Guidelines COMMENT
Sign Up: Register as a new user to create an account.
Login: Log in with your credentials.
Start Chatting: Select a user to start chatting in real time.
Log Out: Securely log out after your session.

COMMENT FEATURES COMMENT
Real-time messaging using Socket.io.
User authentication and authorization.
Responsive UI built with React and styled using DaisyUI.
Backend API powered by Node.js and Express.
Data storage and retrieval with MongoDB.

COMMENT TECH STACK COMMENT
Frontend: React, DaisyUI
Backend: Node.js, Express.js
Database: MongoDB
Real-Time Communication: Socket.io

COMMENT PROJECT ARCHITECTURE COMMENT

Client (Frontend):
The frontend is built with React and styled using DaisyUI. It handles the user interface, routing, and communication with the backend.
Server (Backend):
The backend is powered by Node.js and Express. It provides RESTful APIs for authentication, user management, and data storage.
Real-Time Communication:
Socket.io enables real-time chat functionality, ensuring messages are delivered instantly.
Database:
MongoDB is used to store user data, chat histories, and other necessary information.

COMMENT API DOCUMENTATION FOR MY CHAT WEB APP PROJECT COMMENT

baseURL:
"http://localhost:5001/api",

<!-- COMMENT SIGNUP,LOGIN, LOGOUT, PROFILEPIC, CHECK -->

1. POST/auth/signup
   Description: Registers a new user with their email, password, and full name.
   Request Body:{

"fullName": "John Doe"
"email": "user@example.com",
"password": "strongpassword123",
}

2. POST/auth/login
   Description: Authenticates a user with email and password and returns a JWT token for subsequent requests.

   {
   "email": "user@example.com",
   "password": "123456"
   }

3. POST/auth/logout
   Description: Logs out the currently authenticated user by invalidating the session or JWT token.
   Authentication: Requires a valid JWT token in the Authorization header.
   Request: No request body is needed.

4. PUT/auth/update-profile
   Description: Allows the authenticated user to update their profile information (e.g., full name, profile picture).
   Authentication: Requires a valid JWT token in the Authorization header.

COMMENT General Notes:
Authentication: All endpoints that modify user data (e.g., update-profile, check) require the user to be authenticated. This is typically done via a Bearer token sent in the Authorization header of the request.

<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->
<!-- SKELETON -->

├── client/
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
└── README.md # Project documentation
