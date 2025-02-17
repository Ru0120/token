import mongoose from "mongoose";
import { blogSchema } from "../schema/blogSchema.js";
export const Blog = mongoose.model("Blog", blogSchema);
