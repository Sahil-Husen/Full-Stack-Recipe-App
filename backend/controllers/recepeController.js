import mongoose from "mongoose";
import Recepe from "../models/recepeSchema.js";

export const addRecepe = async (req, res) => {
  const { name, description, properties } = req.body;
  try {
    const newRecepe = await Recepe.create({
      name: name,
      description: description,
      properties: properties,
    });
    await newRecepe.save();
    res.status(201).json({
      message: "Recepe added successfully",
    });
  } catch (error) {
    console.log("Error in Adding Recepe in DB", error);
  }
};

export const getRecepes = async (req, res) => {
  try {
    const recipes = await Recepe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getRecepe = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "invalid recipe ID",
      });
    }

    const recipe = await Recepe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe Not Found" });
    }
    res.status(200).json({message:'success',recipe});
  } catch (error) {
    console.log("Error in getting recipe", error);
  }
};
