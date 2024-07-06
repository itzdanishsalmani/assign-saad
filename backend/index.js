import express from "express";
// import { connectDB } from './db';
import { connectDB } from "./db.js";
import UserScehema from "./schema/user.schema.js";
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
    await UserSchema.create({
      username,
      password,
      email,
      phoneNo,
    });
   return res.status(200).json({message: "success"})
  });

// res.status(200).json({ message: "success" });
