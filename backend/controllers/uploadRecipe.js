 

import cloudinary from "../config/cloudinary.js";
import upload from "../middleware/uploadMiddleware.js";
import recipeSchema from "../models/recepeSchema.js";

export const uploadImage = async (req, res) => {
  try {
    const { name, description, properties } = req.body;
    if (!(name || description || properties)) {
      return res.status(401).json({
        message: "Name, description and properties are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // convert buffer to base64
    const base64String = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // upload the image on cloudinary

    const result = await cloudinary.uploader.upload(base64String, {
      folder: "uploads",
      resource_type: "image",
    });

    const savedRecipe = recipeSchema.create({
      name,
      description,
      properties,
      image: result.secure_url,
    });

    res.status(200).json({
      message: "Image Uploaded Successfully",
      url: result.secure_url,
    });
  } catch (error) {
    console.log("error :", error);
    res.status(500).json({
      message: "Upload Failed",
      error: error.message,
    });
  }
};
