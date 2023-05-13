const express = require("express");
const path = require('path');
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, "data", "products.json");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const adminRoutes = require("./routes/admin.routes");

const errorControllers = require("./controllers/error.controllers")

app.use(productsRoutes);
app.use(adminRoutes);
app.use(cartRoutes);


app.get("*", errorControllers.error);

app.listen(5000);