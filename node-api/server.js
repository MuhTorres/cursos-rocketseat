const express = require('express'),
 mongoose = require('mongoose'),
 requireDir = require('require-dir'),
 app = express();

// Iniciando db
mongoose.connect(process.env.DB_STR, { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT);