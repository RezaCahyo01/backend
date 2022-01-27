//import express //
const express = require("express");
const app = express();

// definisi port //
app.listen(3000, function () {
    console.log("Server is running at https://localhost:3000");
});

const router = require("./routes/api");
app.use(express.json());
app.use(express.urlencoded());
app.use(router);