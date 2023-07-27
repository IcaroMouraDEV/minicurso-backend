const con = require('./connection')

const findAll = async () => {
  const [data] = await con.execute('SELECT * FROM publisher')

  return data
}

const findById = async (id) => {
  const [[data]] = await con.execute('SELECT * FROM publisher WHERE id=?', [id])

  return data
}

const insert = async (name) => {
  const [{ insertId }] = await con.execute(`
  INSERT INTO publisher (name) VALUE (?)`, [name]);

  return insertId;
}

const update = async ({ id, name }) => {
  const data = await con.execute(`
  UPDATE publisher SET name=? WHERE id=?`, [name, id]);

  return data;
}

const remove = async (id) => {
  const data = await con.execute(`
  DELETE FROM publisher WHERE id=?`, [id]);

  return data;
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
