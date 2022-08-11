import db from '../../utils/database.js';

export const shortenUrl = async ({ shortenedUrl, originalUrl }) => {
  const data = await db.query('INSERT INTO urls (short, original) VALUES ($1, $2) RETURNING *', [shortenedUrl, originalUrl]);
  return data.rows;
};

export const redirectUrl = async (url) => {
  const data = await db.query('SELECT * FROM urls WHERE short = $1', [url]);
  return data.rows[0];
};
