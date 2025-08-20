import mongoose from "mongoose";

const RecepeSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.ObjectId,
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    properties: {
      type: String,
      required: true, // recently added
    },
    image: String,
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError
const Recepe = mongoose.models.Recepe || mongoose.model("Recepe", RecepeSchema);

export default Recepe;
