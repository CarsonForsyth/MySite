const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req, res) => {
    res.render("index.ejs");
});
/*app.get("/resume", (req, res) => {
    var data = fs.readFileSync('./public/pdfs/mid1-1.pdf');
    res.set('Content-Type', 'application/pdf');
    res.send(data);
});*/
app.get("/resume", (req, res) => {
    res.render("resume.ejs");
});
app.get("/resume.pdf", (req, res) => {
    //var data = fs.readFileSync('./public/pdfs/mid1-1.pdf');
    //res.set('Content-Type', 'application/pdf');
    //res.send(data);
    res.download('./public/pdfs/Res.pdf', 'Carson Forsyths Resume.pdf')
});

module.exports = app;