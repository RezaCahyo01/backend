// import database //
const db = require("../config/database.js");

// membuat class Model Patient //
class Patient {
  // Membuat method static semua //
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      db.query(sql, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  }

  // Membuat method static create //
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO Patients SET ?";
      db.query(sql, data, (err, results) => {
        err ? reject(err) : resolve(results.insertId);
      });
    });
    const patient = await this.find(id);
    return patient;
  }

  // Membuat method melakukan select data //
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [patient] = results;
        err ? reject(err) : resolve(patient);
      });
    });
  }

  // Membuat method melakukan update data ke database //
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
    const patient = await this.find(id);
    return patient;
  }

  // Membuat method melakukan delete data di database //
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  }
  // Mencari data sesuai nama //
  static search(names) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name LIKE N?";
      db.query(sql, names, (err, results) => {
        resolve(results);
      });
    });
  }
  // Mencari data sesuai status //
  static find(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status=?";
      db.query(sql, status, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class patient //
module.exports = Patient;