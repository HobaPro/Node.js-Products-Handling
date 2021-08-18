const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/DataPro";

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    category: String,
})

const Products = mongoose.model('products', productSchema);

exports.getAllProducts = () => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Products.find({})
        }).then(products => {
            resolve(products);
            mongoose.disconnect();
        }).catch(err => {
            reject(err)
            mongoose.disconnect();
        })
    })
}

exports.getProductsByCategory = (category) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Products.find({category: category})
        }).then((data) => {
            console.log(data)
            resolve();
            mongoose.disconnect();
        }).catch(err => {
            reject(err);
            mongoose.disconnect();
        })
    })
}