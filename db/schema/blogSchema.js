import mongoose, { Schema } from "mongoose";

export const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    userId: { type: String, ref: "Users" },
  },
  { timestamps: true, collection: "blog" }
);
