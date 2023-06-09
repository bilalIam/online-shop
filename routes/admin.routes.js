const express = require("express");

const router = express.Router();

const { getAddProduct, postAddProduct, getAdminProducts, getOrders } = require("../controllers/admin.controllers")


router.get("/admin/add-product", getAddProduct);

router.post("/admin/add-product", postAddProduct);

router.get("/admin/products", getAdminProducts);

router.get("/admin/orders", getOrders);

module.exports = router;