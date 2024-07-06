import express from "express";
import { connectDB } from "./db.js";
import User from "./schema/userSchema.js";
const app = express();

const MONGO_URL =
  "mongodb+srv://saadansari:UVJXHDJW8NrSrfW8@cluster0.rrwsgcg.mongodb.net/assignment";
const PORT = process.env.PORT || 8000;
connectDB(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB Connected And Server Started", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.post("/signup", async (req, res) => {
    const { username, email, password, phoneNo } = req.body;
    console.log(username);
    await User.create({
      username,
      password,
      email,
      phoneNo
    });
   return res.status(200).json({message: "success"})
  });

  app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password);
    await User.create({
      username,
      password,
    });
   return res.status(200).json({message: "success"})
  });
