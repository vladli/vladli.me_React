import mongoose from "mongoose";
const { Schema } = mongoose;

const carModel = new mongoose.Schema(
  {
    maker: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      requred: true,
    },
    year: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const module = mongoose.model("soldcars", carModel);
export default module;
