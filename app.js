const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database');
const user = require('./routes');

const app = express();

require('./config/passport');

app.use(bodyParser.json());
mongoose.connect(config.mongoURI);

// Setting up the Static path for future builds
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(morgan('combined'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error:'));
db.once('open', () => console.log('Now connected to MongoDB'));

const port = process.env.PORT || 8081;

app.use('/users', user);

app.listen(port, () => console.log(`Now listening on Port ${port}`));