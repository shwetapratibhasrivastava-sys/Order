import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrderById,
  updateOrder,
} from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/", createOrder);
orderRoute.get("/", getOrder);
orderRoute.get("/:id", getOrderById);
orderRoute.put("/:id", updateOrder);
orderRoute.delete("/:id", deleteOrder);

export default orderRoute;