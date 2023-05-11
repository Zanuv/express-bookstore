/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const db = new Client({
	connectionString: DB_URI,
	ssl: {
		rejectUnauthorized: false,
	},
	password: process.env.DATABASE_PASSWORD,
});

db.connect();

module.exports = db;
