import express from "express";
import dotenv from "dotenv";
// import products from "./data/products.js";
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFount, errorHandle } from "./middleWare/errorMiddleWare.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);

app.use(notFount);

app.use(errorHandle);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
