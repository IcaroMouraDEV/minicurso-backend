const con = require('./connection')

const findAll = async () => {
  const [data] = await con.execute('SELECT * FROM author')

  return data
}

const findById = async (id) => {
  const [[data]] = await con.execute('SELECT * FROM author WHERE id=?', [id])

  return data
}

const insert = async (name) => {
  const [{ insertId }] = await con.execute(`
  INSERT INTO author (name) VALUE (?)`, [name]);

  return insertId;
}

const update = async ({ id, name }) => {
  const data = await con.execute(`
  UPDATE author SET name=? WHERE id=?`, [name, id]);

  return data;
}

const remove = async (id) => {
  const data = await con.execute(`
  DELETE FROM author WHERE id=?`, [id]);

  return data;
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
