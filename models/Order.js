import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: String,
  houseNumber: String,
  orderTimestamp: Date,
  deliveryTimestamp: Date,
  items: [
    {
      itemId: String,
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
