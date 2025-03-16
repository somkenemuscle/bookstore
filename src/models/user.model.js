import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "fullname is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "User already exists"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);