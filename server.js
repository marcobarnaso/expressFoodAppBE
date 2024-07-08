import express from "express";
import dotenv from "dotenv";
import { connect_db } from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import menuItemRoutes from "./routes/menuItemRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api/auth", authRoutes);
app.use("/api/cust", customerRoutes);
app.use("/api/menu", menuItemRoutes);
app.use("api/order", orderRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  connect_db();
  console.log(`Backend server running on port ${port}.`);
});
