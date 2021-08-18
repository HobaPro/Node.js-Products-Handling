const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(__dirname + '/assets'))

app.set('view engine', 'ejs');
app.set('views', 'views')

const productsRouter = require('./routes/products.route')

app.use(productsRouter);

app.get('/products', (req, res) => {
    res.render('products')
})

app.listen(port, err => {
    if (err) console.log(err)
})