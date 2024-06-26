import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv"
import messageRouter from "./routes/messageRouter.js"
import cors from "cors"

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter)

app.get("/", (req, res) => {
    return res.json("Hello, public")
})

dbConnection()

export default app;