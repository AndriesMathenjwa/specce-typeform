import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import questionRoute from "./api/routes/questions.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to database");
    } catch (error) {
        throw error;
    }
};

app.get("/", (req, res) => {
    res.send("hello world siyaphila");
});

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
});

app.use(express.json()); 
app.use("/api/questions", questionRoute);

app.listen(3001, () => {
    connect();
});
