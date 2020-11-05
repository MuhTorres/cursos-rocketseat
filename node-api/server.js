const express = require('express'),
 mongoose = require('mongoose'),
 requireDir = require('require-dir');
 
const app = express();

app.use(express.json());
// Iniciando db
mongoose.connect(process.env.DB_STR, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

requireDir('./src/models/');

app.get('/', (req, res) => res.send("It is working!"));

const routes = require('./src/routes');
app.use('/api', routes);

app.listen(process.env.PORT);
console.log(`Connection State: ${mongoose.connection.readyState}`);
console.log(`Listening to: http://localhost:${process.env.PORT}`)