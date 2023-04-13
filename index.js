const express = require("express");
const path = require('path');
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, "data", "products.json");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => res.redirect("/products"));
app.get("/products", (req, res) => {
    fs.readFile(p, (Err, products) => {
        res.render("index", {
            pageTile: "Online Shop",
            products: JSON.parse(products),
        });
    });
});

app.get("/admin/add-product", (req, res) => {
    res.render("add-product");
})

app.post("/admin/add-product", (req, res) => {
    const { title, price } = req.body;

    const product = {
        id: v4(),
        title,
        price
    }

    fs.readFile(p, (err, products) => {
        const updatedProducts = [product, ...JSON.parse(products)];
        fs.writeFile(p, JSON.stringify(updatedProducts), () => {
            res.redirect("/");
        });
    });
});

app.listen(5000);