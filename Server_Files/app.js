const express = require("express"); // Adding_EXPRESS
const app = express(); // app in express
const mongoose = require("mongoose"); // mongoose
// const fs = require("fs"); // adding fs
// const path = require("path"); // path 



app.get("/", (req, res) => {
    res.status(200).render('../SERVING_FILES_HTML/index');
})

app.listen('205');
