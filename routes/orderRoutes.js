import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/createOrder", protect, createOrder);
router.get("/getOrder", protect, getOrderById);
router.get("/allOrders/", protect, getAllOrders);
router.patch("/modifyOrder", protect, updateOrder);
router.delete("deleteOrder", protect, deleteOrder);

export default router;
