/** Database config for database. */

require("dotenv").config();
const { Client } = require("pg");
const { DB_URI, DB_PASSWORD } = require("./config");

console.log(DB_PASSWORD);

let db = new Client({
	connectionString: DB_URI,
	password: DB_PASSWORD,
});

db.connect();

module.exports = db;
