const con = require('./connection')

const findAll = async () => {
  const [data] = await con.execute('SELECT * FROM book')

  return data
}

const findById = async (id) => {
  const [[data]] = await con.execute('SELECT * FROM book WHERE id=?', [id])

  return data
}

const insert = async (item) => {
  console.log(item);
  const [{ insertId }] = await con.execute(`
  INSERT INTO book (
    author_id,
    genre_id,
    publisher_id,
    title,
    resume,
    cover,
    price)
  VALUE (?,?,?,?,?,?,?)
  `, [
    item.authorId,
    item.genreId,
    item.publisherId,
    item.title,
    item.resume,
    item.cover,
    item.price
  ]);

  return insertId;
}

// const update = async ({ id, name }) => {
//   const data = await con.execute(`
//   UPDATE book SET name=? WHERE id=?`, [name, id]);

//   return data;
// }

const remove = async (id) => {
  const data = await con.execute(`
  DELETE FROM book WHERE id=?`, [id]);

  return data;
}

module.exports = {
  findAll,
  findById,
  insert,
  // update,
  remove
}
