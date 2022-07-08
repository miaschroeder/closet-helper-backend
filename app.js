const express = require('express');
const app = express();
const connectDB = require('./db/connect-db');
require('dotenv').config();


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
