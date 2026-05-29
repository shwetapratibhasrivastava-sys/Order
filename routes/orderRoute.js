import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrderById,
  updateOrder,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js"
const orderRoute = express.Router();

orderRoute.post("/", createOrder);
orderRoute.get("/", authMiddleware,getOrder);
orderRoute.get("/:id",authMiddleware, getOrderById);
orderRoute.put("/:id", authMiddleware,updateOrder);
orderRoute.delete("/:id", authMiddleware,deleteOrder);

export default orderRoute;