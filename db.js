/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

console.log(process.env.DATABASE_PASSWORD);

/* const db = new Client({
	connectionString: DB_URI,
	password: process.env.DATABASE_PASSWORD,
}); */

let db = new Client({
	host: "/var/run/postgresql/",
	database: "books",
});

db.connect();

module.exports = db;
