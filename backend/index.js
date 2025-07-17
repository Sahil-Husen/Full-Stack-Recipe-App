import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/userSchema.js";
import RecepeRoutes from './routes/RecepeRoutes.js'

 
dotenv.config();

 
const app = express();

// Middleware
app.use(cors()); // optional: for cross-origin requests
app.use(cookieParser());
app.use(express.json()); // built-in body parser for JSON
app.use(express.urlencoded({ extended: true })); // built-in parser for form data

// Connect to database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/Recepe",RecepeRoutes)

// Default route
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
 

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
