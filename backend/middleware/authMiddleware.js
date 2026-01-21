import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import user from "../models/userSchema.js";
dotenv.config();

const secret = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ message: "Unauthorized! Token not provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, secret);

    // console.log("decoded:", decoded);

    // Attach user info to req (not res!)
    req.user = decoded;

    next(); // proceed to the next middleware or route handler

  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(403).json({
      message: "Invalid or Expired Token",
    });
  }
};

export default verifyToken;
