import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" })

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

export default db;

