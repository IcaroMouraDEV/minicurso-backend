const express = require('express');
const model = require('../model/genre');

const route = express.Router();

route.get('/', async (_req, res) => {
  const data = await model.findAll()

  res.status(200).json(data)
})

route.get('/:id', async (req, res) => {
  const { id } = req.params
  const data = await model.findById(id)

  res.status(200).json(data)
})

route.post('/', async (req, res) => {
  const { name } = req.body
  const insertId = await model.insert(name)

  res.status(201).json({ msg: `item inserido com o id: ${insertId}` })
})

route.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await model.update({ id, name })

  res.status(200).json({ msg: 'item alterado com sucesso' })
})

route.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await model.delete(id)

  res.status(200).json({ msg: 'item deletado com sucesso' })
})

module.exports = route
