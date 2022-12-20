import express from "express";
import db from "./config/db.js"

const app = express();

app.use(express.json());

db.on("error" , console.log.bind("Connection failed"));
db.once("open", () => {
    console.log("db connected");
})

export default app;