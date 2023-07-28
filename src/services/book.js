const model = require('../model/book');
const { bookValidation } = require('./validations/book')

const getAll = async () => {
  const data = await model.findAll()

  return {
    code: 200,
    msg: data
  }
}

const getById = async (id) => {
  const data = await model.findById(id)

  if (!data) return { code: 404, msg: 'Book not found' }

  return {
    code: 200,
    msg: data
  }
}

const insert = async (data) => {
  console.log(data);
  const validate =  bookValidation(data)

  if (validate.err) return {
    code: validate.code,
    msg: validate.msg
  }

  const insertId = await model.insert(data)

  return {
    code: 201,
    msg: `Book ${insertId} insert sucessful`
  }
}

// const update = async ({ id, name }) => {
//   const data = await model.findById(id)

//   if (!data) return {
//     code: 404,
//     msg: `Book not found`
//   }

//   if (!name) return {
//     code: 400,
//     msg: 'name is required'
//   }

//   await model.update({ id, name })

//   return {
//     code: 200,
//     msg: `Book ${id} update sucessful`
//   }
// }

const remove = async (id) => {
  const data = await model.findById(id)

  if (!data) return {
    code: 404,
    msg: `Book not found`
  }

  await model.remove(id)

  return {
    code: 200,
    msg: `Book ${id} remove sucessful`
  }
}

module.exports = {
  getAll,
  getById,
  insert,
  // update,
  remove
}