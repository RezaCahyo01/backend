// import mysql //
const mysql = require("mysql");

// import dotenv dan jalankan method config //
require("dotenv").config();

// destructing object process.env //
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

const db = mysql.createConnection({
  host: "localhost",
  user: DB_USERNAME || "root",
  password: DB_PASSWORD || "",
  database: DB_DATABASE || "patients_covid",
});

db.connect((err) => {
  if (err) {
    console.log("Koneksi error" + err.stack);
    return;
  } else {
    console.log("Koneksi ke database");
    return;
  }
});

module.exports = db;