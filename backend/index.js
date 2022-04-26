const env = require('dotenv').config();
const express = require('express');
const databaseConntection = require('./database/mongoDB');

const app = express();

// Listen for requests only if a connection to the database has been established

databaseConntection(() => {
    app.listen(process.env.PORT);
});



