const express = require('express');
const service = require('../controllers/author');

const route = express.Router();

route.get('/', service.getAll)

route.get('/:id', service.getById)

route.post('/', service.insert)

route.put('/:id', service.update)

route.delete('/:id', service.remove)

module.exports = route
