import dotenv from "dotenv";
dotenv.config();
import http, { createServer } from "http";
import app from "./index.js";

const Server = createServer(app);
const Port = process.env.PORT;

Server.listen(Port, () => console.log(`Server is running at port  ${Port}`));
