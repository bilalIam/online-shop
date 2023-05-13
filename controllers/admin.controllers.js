
const Product = require("../model/Product");

exports.getAddProduct = (req, res) => {
    res.render("add-product", {path: "/admin/add-product"});
}

exports.postAddProduct = (req, res) => {
    const { title, price } = req.body;

    const product = new Product(title, price);
    product.save();
    res.redirect('/products');
}

exports.getAdminProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("admin-products", {
            pageTile: "admin products",
            path: "/admin/products",
            products: products,
        });
    })
}

exports.getOrders = (req, res) => {
    res.render("orders", {
        pageTile: "orders",
        path: "/admin/orders",
    });
}

