const express = require('express');
const authMiddleware = require('../middleware/auth.js');
const { listOrders, placeOrder, updateStatus, userOrders, verifyOrder, placeOrderCod } = require('../controllers/orderController.js');

const orderRouter = express.Router();

orderRouter.get("/list",listOrders);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.post("/place",placeOrder);
orderRouter.post("/status",updateStatus);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/placecod",placeOrderCod);

module.exports = orderRouter;