const model = require('../model/publisher');

const getAll = async () => {
  const data = await model.findAll()

  return {
    code: 200,
    msg: data
  }
}

const getById = async (id) => {
  const data = await model.findById(id)

  if (!data) return { code: 404, msg: 'Publisher not found' }

  return {
    code: 200,
    msg: data
  }
}

const insert = async (name) => {
  const { msg: data } = await getAll()

  if (data.find((item) => item.name === name)) return {
    code: 400,
    msg: `Publisher ${name} already exists`
  }

  if (!name) return {
    code: 400,
    msg: 'name is required'
  }

  const insertId = await model.insert(name)

  return {
    code: 201,
    msg: `Publisher ${insertId} insert sucessful`
  }
}

const update = async ({ id, name }) => {
  const data = await model.findById(id)

  if (!data) return {
    code: 404,
    msg: `Publisher not found`
  }

  if (!name) return {
    code: 400,
    msg: 'name is required'
  }

  await model.update({ id, name })

  return {
    code: 200,
    msg: `Publisher ${id} update sucessful`
  }
}

const remove = async (id) => {
  const data = await model.findById(id)

  if (!data) return {
    code: 404,
    msg: `Publisher not found`
  }

  await model.remove(id)

  return {
    code: 200,
    msg: `Publisher ${id} remove sucessful`
  }
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
}