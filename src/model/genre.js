const con = require('./connection')

const findAll = async () => {
  const [data] = await con.execute('SELECT * FROM genre')

  return data
}

const findById = async (id) => {
  const [[data]] = await con.execute('SELECT * FROM genre WHERE id=?', [id])

  return data
}

const insert = async (name) => {
  const [{ insertId }] = await con.execute(`
  INSERT INTO genre (name) VALUE (?)`, [name]);

  return insertId;
}

const update = async ({ id, name }) => {
  const data = await con.execute(`
  UPDATE genre SET name=? WHERE id=?`, [name, id]);

  return data;
}

const remove = async (id) => {
  const data = await con.execute(`
  DELETE FROM genre WHERE id=?`, [id]);

  return data;
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
