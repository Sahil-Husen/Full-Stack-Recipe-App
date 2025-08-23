import express from "express";
import {
  addRecepe,
  getRecepes,
  getRecepe,
  editRecepe,
  deleteRecipe,
} from "../controllers/RecepeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addRecepe", authMiddleware, addRecepe);
router.get("/getRecepes", authMiddleware, getRecepes);
router.get("/getRecepe/:id", authMiddleware, getRecepe);
router.put("/:id/edit-Recepe", authMiddleware, editRecepe);
router.delete("/delete-Recipe/:id", authMiddleware, deleteRecipe);

export default router;
