require('dotenv').config();

const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/api', routes)

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})