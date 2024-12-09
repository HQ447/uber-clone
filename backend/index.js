import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// app.listen(8000, () => console.log(`Server is Running at Port ${8080}`));

export default app;
