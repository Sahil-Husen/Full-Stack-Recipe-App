import User from "../models/userSchema.js";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

// const SECRET = process.env.JWT_SECRET;
// console.log("secret", SECRET);

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("signup hitted");
  console.log(name, email, password);
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        error: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedpassword", hashedPassword);
    const user = await User.create({
      name: name,
      email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({
      message: "SignUp Successful",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

 //login

export const login = async (req, res) => {  
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid User",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    // Set token in cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // use true only in production
      sameSite: "Strict",
      maxAge: 30 * 60 * 1000, // 30 minutes
    });

    return res.status(201).json({ message: "Login successful",token});
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

