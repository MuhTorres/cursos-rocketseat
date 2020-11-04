const express = require('express'),
routes = express.Router();

routes.get('/', (req, res) => {
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });
    
    res.send('Hello');
});

module.exports = routes;