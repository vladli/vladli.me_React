import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requred: true,
    },
  },
  { timestamps: false }
);

const module = mongoose.model("users", userModel);
export default module;
