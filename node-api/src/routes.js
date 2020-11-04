const express = require('express'),
routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', (req, res) => ProductController.index);
routes.get('/product', (req, res) => ProductController.create);

module.exports = routes;