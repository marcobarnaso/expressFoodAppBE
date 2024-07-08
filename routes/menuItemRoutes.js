import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController";

const router = express.Router();

router.post("/createMenuItem", protect, createMenuItem);
router.get("/getMenuItem", protect, getMenuItemById);
router.get("/getAllMenuItems", protect, getAllMenuItems);
router.patch("/modifyMenuItem", protect, updateMenuItem);
router.delete("/deleteMenuItem", protect, deleteMenuItem);

export default router;
