const express = require("express");
const app=express();
 app.use(express.static('css'))
const path= require ("path");
const https = require("https");
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve("index new.html")))

    .post((req, res) => res.send("POST AUTO"));
module.exports = router;