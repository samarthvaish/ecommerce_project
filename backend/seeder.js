import mongoose from "mongoose";
import User from "./models/users.js";
import Order from "./models/order.js";
import Product from "./models/product.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("destroyed Data");
    process.exit();
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
