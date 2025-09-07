const MySQL = require('mysql2');
require('dotenv').config();

const pool = MySQL.createPool({
host: process.env.DB_HOST,
user:process.env.DB_USER,
password:process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: process.env.DB_PORT,
waitForConections: true,
trueconnectionLimit:10,
queueLimit:0
});

module.exports=pool.promise();
