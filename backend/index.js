import express from "express";
import { connectDB } from "./db.js";
import bodyParser from 'body-parser';
import User from "./schema/userSchema.js";
import cors from "cors"
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors)

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

      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

      
    return res.status(200).json({message: "success"})
    });

    app.post("/attendance", async (req, res) => {
      const { username,date } = req.body;
      console.log(username,date);
      const user = await User.findOne({
        username:req.body.username
      });

      if(user){
        await User.create({
          username:user.username,
          inTime:date
        })
      }
      console.log("attendance marked")
     return res.status(200).json({message: "success"})
    });
  