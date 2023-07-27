const express = require('express');

const root = require('./routes')

const app = express();

app.use(express.json());
app.use('', root)

app.get('/', (_req, res) => res.status(200).json({ message: 'PRIMEIRA API' }))

module.exports = app;