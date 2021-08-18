const productsModel = require('../model/products.model');

exports.getProducts = (req, res) => {
    let category = req.query.category;

    const categories = ["milks", "cheese", "zabady"]

    if(category && categories.includes(category)) {
        productsModel.getProductsByCategory(category).then(products => {
            res.json({
                products,
            })
        })
    }else {
        productsModel.getAllProducts().then(products => {
            res.json({
                products, 
            })
        })
    }
}