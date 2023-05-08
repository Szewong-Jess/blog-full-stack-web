import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Routes from "./router/index.js";
import dbConnect from "./db/index.js";

dotenv.config();

const app = express();

// cors is allow frontend to call backend
app.use(cors({ origin: "http://localhost:3000" }));

// change server side response to json
app.use(express.json());

const PORT = 5000;

app.use("/api", Routes);

app.get("/healthcheck", (_, res) => {
  res.status(200).send("server is working");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port: ${PORT}`);
});
