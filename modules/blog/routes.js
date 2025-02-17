import express from "express";
import { Blog } from "../../db/models/blog.js";
export const blogRoutes = express.Router();

blogRoutes.post("/create", async (req, res) => {
  const { title, description, content } = req.body;

  const { userId } = req.user; // login hiisen user id

  const blog = await Blog.create({ title, description, content, userId });

  res.send(blog);
});
