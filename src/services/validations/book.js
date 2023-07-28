const Joi = require('joi');

const bookSchema = Joi.object({
  authorId: Joi.number().min(1).required(),
  genreId: Joi.number().min(1).required(),
  publisherId: Joi.number().min(1).required(),
  title: Joi.string().required(),
  resume: Joi.string().required(),
  cover: Joi.string().required(),
  price: Joi.number().min(1).required()
})

const bookValidation = (data) => {
  const { error: err } = bookSchema.validate(data)

  if (err) return {
    err: true,
    code: 400,
    msg: err.message
  }

  return { err: false }
}

module.exports = {
  bookValidation
}