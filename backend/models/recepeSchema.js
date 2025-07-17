import mongoose from "mongoose";

const RecepeSchema = mongoose.Schema(
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
    },
    image: String,
  },
  { timeStamp: true }
);

const Recepe = mongoose.model("Recepe", RecepeSchema);
export default Recepe;
