const { Pool } = require('pg');
const { HOST, USER, PASSWORD, DATABASE, PORT } = require('../config');

const pool = new Pool({
  host: process.env.HOST || HOST,
  user: process.env.USER || USER,
  password: process.env.PASSWORD || PASSWORD,
  database: process.env.DATABASE || DATABASE,
  port: process.env.PORT || PORT,
  max: 4,
});

module.exports = pool;
