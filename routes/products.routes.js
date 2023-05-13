const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.redirect("/products"));

const { getProducts, getProduct } = require("./../controllers/products.controllers");

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

module.exports = router;