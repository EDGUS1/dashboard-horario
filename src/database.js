const { Pool } = require('pg');
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} = require('../config');

const pool = new Pool({
  host: process.env.DB_HOST || DB_HOST,
  user: process.env.DB_USER || DB_USER,
  password: process.env.DB_PASSWORD || DB_PASSWORD,
  database: process.env.DB_DATABASE || DB_DATABASE,
  port: process.env.DB_PORT || DB_PORT,
  max: 4,
});

module.exports = pool;
