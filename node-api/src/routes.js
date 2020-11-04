const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', (req, res) => ProductController.index);
routes.post('/products', (req, res) => ProductController.store);

module.exports = routes;