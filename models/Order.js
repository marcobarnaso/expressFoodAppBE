import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  houseNumber: String,
  orderTimestamp: Date,
  deliveryTimestamp: Date,
  items: [
    {
      itemName: String,
      quantity: Number,
      price: Number,
    },
  ],
  orderTotal: Number,
  customerId: String,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
