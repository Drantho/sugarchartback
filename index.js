const express = require('express');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(compression());
app.use(cors());

const PORT = process.env.port || 8081;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true}, () => {
    console.log(`mongodb connected.`);
});

app.get('/', (req, res) => {
    res.json({msg: 'You have arrived at sugar chart back end.'})
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));