import mongoose, { Schema } from "mongoose";

export const comSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },

    userId: { type: String, ref: "Users" },
    blogId: { type: String, ref: "blog" },
  },
  { timestamps: true, collection: "blog" }
);
