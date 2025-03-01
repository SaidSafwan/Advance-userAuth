import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";    

dotenv.config();

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello World");
});

app.use('/api/auth', authRoutes);

app.listen(3000, ()=>{
    connectDB();
    console.log("Server is running on part 3000");
});