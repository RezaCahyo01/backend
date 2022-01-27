// TODO 2: SETUP ROUTING (ROUTER) //
// import Patient Controller //
const PatientController = require("../controllers/PatientController");
// import express //
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Reza Cahyo Wibowo");
});

// Membuat router patients //
router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/:id", PatientController.show);
router.get("/patients/search/:name", PatientController.search);
router.get("/patients/status/positive", PatientController.positive);
router.get("/patients/status/recovered", PatientController.recovered);
router.get("/patients/status/dead", PatientController.dead);

module.exports = router;