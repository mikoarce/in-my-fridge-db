const express = require('express');
const apiRoutes = require('./api-routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose').set('debug', true);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/in-my-fridge-backend', { useNewUrlParser: true });
const db = mongoose.connection;

if (db) {
    console.log('Successfully connected to DB!');
} else {
    console.log('Failed to connect to DB!');
}

const port = process.env.PORT || 8000;
app.get('/', (req, res) => res.send('Hello with Express and nodemon!'));
app.use('/api', apiRoutes);
app.listen(port, () => console.log(`RUNNING ON PORT ${port}`));
