const express = require('express');

const route = express.Router();

const genre = require('./genre')
const author = require('./author')
const publisher = require('./publisher')

route.use('/genre', genre)
route.use('/author', author)
route.use('/publisher', publisher)

module.exports = route;
