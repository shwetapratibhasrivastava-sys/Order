import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import orderRoute from "./routes/orderRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/order", orderRoute);
app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});