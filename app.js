const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tops = require('./routes/tops');
require('dotenv').config();


app.use(express.json());
app.use('/api/v1', tops);

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
