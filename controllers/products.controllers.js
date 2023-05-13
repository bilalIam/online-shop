const fs = require('fs');
const {v4} = require('uuid')
const Product = require("../model/Product");

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("index", {
            pageTile: "Online Shop",
            path: "/products",
            products: products
        });
    })   
}




exports.getProduct = (req, res) => {
    const { id } = req.params;

    Product.findById(id, (product) => {
        const error = {message: "Not Found"};
        if (!product) return res.render("error", { pageTitle: error.title, path: '*', error });

        res.render("detaljno", {
            pageTile: product.title,
            path: "/products",
            product
        })
    })
}