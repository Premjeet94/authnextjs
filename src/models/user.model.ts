import mongoose, { Schema, models, model } from "mongoose";
import { USER_ROLES } from "./roles";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER,
      index: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verifyToken: { type: String, select: false },
    verifyTokenExpiry: { type: Date, select: false },

    forgotPasswordToken: { type: String, select: false },
    forgotPasswordTokenExpiry: { type: Date, select: false },
  },
  { timestamps: true },
);

export default models.User || model("User", userSchema);
