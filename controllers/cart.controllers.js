exports.getCart = (req, res) => {
    res.render("cart", {
        pageTile: "cart",
        path: "/cart",
    });
}