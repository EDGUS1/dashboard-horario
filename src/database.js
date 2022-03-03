const { Pool } = require('pg');
let DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT;

if (process.env.ENVIRONMENT != 'PROD') {
  const {
    DBHOST,
    DBUSER,
    DBPASSWORD,
    DBDATABASE,
    DBPORT,
  } = require('../config');
  DB_HOST = DBHOST;
  DB_USER = DBUSER;
  DB_PASSWORD = DBPASSWORD;
  DB_DATABASE = DBDATABASE;
  DB_PORT = DBPORT;
}

const pool = new Pool({
  host: process.env.DB_HOST || DB_HOST,
  user: process.env.DB_USER || DB_USER,
  password: process.env.DB_PASSWORD || DB_PASSWORD,
  database: process.env.DB_DATABASE || DB_DATABASE,
  port: process.env.DB_PORT || DB_PORT,
  max: 4,
});

module.exports = pool;
