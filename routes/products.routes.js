const express = require("express");
const path = require('path');
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..', "data", "products.json");

const router = express.Router();

router.get("/", (req, res) => res.redirect("/products"));
router.get("/products", (req, res) => {
    fs.readFile(p, (Err, products) => {
        res.render("index", {
            pageTile: "Online Shop",
            path: "/products",
            products: JSON.parse(products),
        });
    });
});

router.get("/products/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile(p, (err, products) => {
        const product = JSON.parse(products).find((product) => product.id === id);
        res.render("detaljno", {
            pageTile: product.title,
            path: "/products",
            product
        })
    })
})

router.get("/admin/add-product", (req, res) => {
    res.render("add-product", {path: "/admin/add-product"});
});


module.exports = router;