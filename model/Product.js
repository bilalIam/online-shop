const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "data", "products.json");
const { v4 } = require('uuid');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]); 
        }
        cb(JSON.parse(fileContent));
    })
} 


module.exports = class Product{
    constructor(title, price){
        this.id = v4();
        this.title = title;
        this.price = price;
    }
    save(){
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }
    static fetchAll(cb){
        getProductsFromFile(cb)
    }
    static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find((product) => product.id === id);
            cb(product);
        })
    }
}