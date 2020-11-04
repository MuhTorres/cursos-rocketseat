const mongoose = require('mongoose'),
Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        console.log("Chegou no Index");
        const products = await Product.find();

        return res.json(products);
    },    

    async store(req, res){
        console.log(req.body);
        const product = await Product.create(req.body);

        return res.json(product);
    }
};