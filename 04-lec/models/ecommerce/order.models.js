import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
})

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        orderItemsSchema
    ],
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        enum: ["cod", "credit_card", "upi", "paypal"],
        required: true
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);