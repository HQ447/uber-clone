import http, { createServer } from "http";
import app from "./index.js";

const Server = createServer(app);

Server.listen(8080, () => console.log(`Server is running at port  ${8080}`));
