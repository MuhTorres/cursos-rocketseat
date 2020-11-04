const mongoose = require('mongoose'),
Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    }
};