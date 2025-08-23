import mongoose from "mongoose";
import Recepe from "../models/RecepeSchema.js";
import { Profiler } from "react";

export const addRecepe = async (req, res) => {
  const { name, description, properties } = req.body;
  try {
    const newRecepe = await Recepe.create({
      name,
      description,
      properties,
    });

    return res.status(201).json({
      message: "Recepe added successfully",
      newRecepe,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getRecepes = async (req, res) => {
  try {
    const Recepes = await Recepe.find();
    res.status(200).json(Recepes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getRecepe = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "invalid Recepe ID",
      });
    }

    const Recepe = await Recepe.findById(id);
    if (!Recepe) {
      return res.status(404).json({ error: "Recepe Not Found" });
    }
    res.status(200).json({ message: "success", Recepe });
  } catch (error) {
    console.log("Error in getting Recepe", error);
  }
};

// Edit the Recepes

export const editRecepe = async (req, res) => {
  const { name, description, properties } = req.body;
  const { id } = req.params;
  try {
    const updatedRecepe = await Recepe.findByIdAndUpdate(
      id,
      {
        ...(name && { name }),
        ...(description && { description }),
        ...(properties && { properties }),
      },
      { new: true }
    );
    if (!updatedRecepe) {
      return res.status(404).json({ message: "Recepe not found" });
    }
    res.status(201).json({ message: "Recepe Edited", updatedRecepe });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in Editing the Recepe", error);
  }
};

export const deleteRecipe = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: " Recipe ID is required" });
  }

  try {
    const deletedRecipe = await Recepe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    return res.status(200).json({ message: "Recipe Deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in deleting the Recipe", error: error.message });
  }
};
