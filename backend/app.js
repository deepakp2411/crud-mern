import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
import web from "./routes/web.js";
import cors from "cors";

// // json
app.use(express.json());

// cors
app.use(cors());




app.use("/", web);







// connect db
connectDB(DATABASE_URL);



app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
