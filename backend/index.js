import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.listen(8080, () => console.log(`Server is Running at Port ${8080}`));
