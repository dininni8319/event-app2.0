import express from "express";
import mongoose from "mongoose";
import morgan from 'morgan'
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./DB";
import eventModel from './models/event-model'

// accessing the .env variables
dotenv.config();

const app = express();

//MIDDLEWARES access to serten features
app.use(morgan('dev'));
app.use(express.json())
// app.use(bodyParser.json({limit:'2mb'}));
app.use(cors());

app.post('/api/event',  async (req, res, next) => {
  console.log("🚀 ~ file: event-route.ts:6 ~ router.post ~ req:", req.body)
  try {
    const { email, date, time } = req.body
  
    if (!email || !date || !time) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }
    
    const event = {
      email,
      date,
      time
    }
    
    const newEvent = new eventModel(event)
    await newEvent.save()
    res.status(201).json(newEvent)

  } catch (error) {
    next(error)
  }
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT
const uri = process.env.MONGO_DB || "";

const start = async () => {
  try {
    if (uri) {
        // DB connection
        connectDB(uri)

        app.listen(port, () => {
        console.log("🚀 ~ file: index.js:14 ~ app.listen ~ port:", port)
      })
    }
  } catch (error) {
    console.log("🚀 ~ file: index.ts:23 ~ start ~ error:", error)
  }
}

start()


