import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Router } from "./routes/routes.route";
dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3333;

app.use(cors());
app.use("/api", Router);
app.listen(SERVER_PORT, () => console.log(`Server running on port ${ SERVER_PORT } 🚀🚀🚀`));
