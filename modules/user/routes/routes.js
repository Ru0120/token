import express from "express";

import { Users } from "../../../db/models/User.js";

export const userRoutes = express.Router();

userRoutes.get("/get-token", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Users.findOne({ email });

    res.send(user.getToken());
  } catch (e) {
    res.send(e.message);
  }
});

userRoutes.get("/profile", async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await Users.findOne({ _id: { $eq: userId } });

    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

userRoutes.get("/profile/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.findOne({ _id: { $eq: userId } });

    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

userRoutes.get("/others", async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await Users.find({ _id: { $ne: userId } });

    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

userRoutes.put("/", async (req, res) => {
  const { username, email } = req.body;
  const { userId: myid } = req.user;

  try {
    const user = await Users.findOneAndUpdate(
      { _id: { $eq: myid } },
      { $set: { username: username, email } },
      { new: true }
    );

    res.send(user);
  } catch (e) {
    res.send("ooriin haygaar newterne vv");
  }
});
