import express from "express";
import { Blog } from "../../db/models/blog.js";
export const blogRoutes = express.Router();

blogRoutes.post("/", async (req, res) => {
  const { title, description, content } = req.body;

  const { userId } = req.user; // login hiisen user id

  const blog = await Blog.create({ title, description, content, userId });

  res.send(blog);
});

blogRoutes.put("/:blogId", async (req, res) => {
  const { userId } = req.user;
  const { blogId } = req.params;

  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: { $eq: blogId }, userId },
      { $set: req.body },
      { new: true }
    );
    console.log(blogId);
    res.send(blog);
  } catch (e) {
    res.send("error");
  }
});

blogRoutes.get("/me", async (req, res) => {
  const { userId } = req.user;

  try {
    const blog = await Blog.find({ userId });
    res.send(blog);
  } catch (e) {}
});

blogRoutes.get("/detail/:blogId", async (req, res) => {
  const { blogId } = req.params;
  try {
    const blog = await Blog.findOne({ _id: { $eq: blogId } });

    res.send(blog);
  } catch (e) {
    res.send(e.message);
  }
});
blogRoutes.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const blog = await Blog.find({ userId: { $ne: userId } });
    console.log(blog);
    res.send(blog);
  } catch (e) {
    res.send(e.message);
  }
});
blogRoutes.delete("/:blogId", async (req, res) => {
  const { userId } = req.params;

  const deleted = await Blog.deleteOne({ usedId: { $eq: userId } });

  res.send(deleted);
});
