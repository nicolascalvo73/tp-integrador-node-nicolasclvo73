require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const indexRouter = require('./src/routes/index');
const usersRouter = require ('./src/routes/users')
const mongoConnectionString = config.get('database.host');

const mongoose = require('mongoose');

mongoose
    .connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("connected to MONGO-DB"))
    .catch((err) => {
    console.error(err);
    throw err;
    });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
