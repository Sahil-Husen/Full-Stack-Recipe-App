import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadImage } from "../controllers/uploadRecipe.js";

const router = express.Router();

// ✅ Fixed: 'single' spelling
router.post("/upload", upload.single("image"), uploadImage);

// ✅ Fixed: export the actual router
export default router;
