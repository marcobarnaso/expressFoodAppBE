import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/getAllCustomers", protect, getAllCustomers);
router.get("/getCustomer", protect, getCustomerById);
router.patch("/updateCustomerInfo", protect, updateCustomer);
router.delete("/deleteCustomer", protect, deleteCustomer);

export default router;
