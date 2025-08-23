import express from "express";
const router = express.Router();
import {signUp,login} from '../controllers/authController.js'

router.post("/signup", signUp);
router.post("/login", login);
 
import authMiddleware from "../middleware/authMiddleware.js";

 

router.get("/me", authMiddleware, (req, res) => {
  // Assuming authMiddleware puts user in req.user
  res.status(200).json({ user: req.user });
});

 


export default  router;
