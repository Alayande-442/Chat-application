import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js"; // Ensure this file exports both `app` and `server`

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5001; // Fallback to 5001 if PORT is not defined

// Middleware
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "10mb" })); // Added payload size limit to avoid 413 errors

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB(); // Connect to the database
});
