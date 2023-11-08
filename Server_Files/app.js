const express = require("express"); // Adding_EXPRESS
const fs = require("fs"); // adding fs
const mongoose = require("mongoose"); // mongoose
const path = require("path"); // path 
const app = express(); // app in express



app.get("/", (req, res) => {
    res.status(200).send("../index.html");
})

app.listen('2005',() => {
    console.log(`http://127.0.0.1:2005`);
})
