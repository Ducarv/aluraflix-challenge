import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

export default db;

