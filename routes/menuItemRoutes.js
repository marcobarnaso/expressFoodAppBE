import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";

const router = express.Router();

router.post("/createMenuItem", protect, createMenuItem);
router.get("/getMenuItem", protect, getMenuItemById);
router.get("/getAllMenuItems", protect, getAllMenuItems);
router.patch("/modifyMenuItem", protect, updateMenuItem);
router.delete("/deleteMenuItem", protect, deleteMenuItem);

export default router;
