const express = require("express");
const path= require ("path");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve("cart.html")))

    .post((req, res) => res.send("POST AUTO"));
module.exports = router;