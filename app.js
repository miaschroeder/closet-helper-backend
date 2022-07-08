const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tops = require('./routes/tops');
const bottoms = require('./routes/bottoms');
const outerwear = require('./routes/outerwear');
require('dotenv').config();


app.use(express.json());
app.use('/api/v1/tops', tops);
app.use('/api/v1/bottoms', bottoms);
app.use('/api/v1/outerwear', outerwear);

const port = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
