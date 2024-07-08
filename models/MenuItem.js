import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  itemId: String,
  itemName: String,
  category: String,
  price: Number,
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
