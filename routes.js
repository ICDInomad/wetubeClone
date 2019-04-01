import express from "express";

export const userRouter = express.Router();

const handleHome = (req, res) => res.send("HI userHome.");
const handleEdit = (req, res) => res.send("HI userEdit");
const handlePassword = (req, res) => res.send("HI userpassword");

userRouter.get("/", handleHome);
userRouter.get("/edit", handleEdit);
userRouter.get("/password", handlePassword);