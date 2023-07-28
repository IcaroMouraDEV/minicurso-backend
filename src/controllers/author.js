const service = require('../services/author')

const getAll = async (_req, res) => {
  const { msg, code } = await service.getAll()

  res.status(code).json(msg)
}

const getById = async (req, res) => {
  const { id } = req.params
  const { msg, code } = await service.getById(id)

  if (code === 200) return res.status(code).json(msg)

  res.status(code).json({ msg })
}

const insert = async (req, res) => {
  const { name } = req.body
  const { msg, code } = await service.insert(name)

  res.status(code).json({ msg })
}

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { msg, code } = await service.update({ id, name })

  res.status(code).json({ msg })
}

const remove = async (req, res) => {
  const { id } = req.params;

  const { msg, code } = await service.remove(id)

  res.status(code).json({ msg })
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
}