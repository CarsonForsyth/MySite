const express = require('express');
const app = express();

const defaultRoute = require('./public/default');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/views/css'));
//app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/views', express.static(__dirname + '/views/'));
app.use('/pdfs', express.static(__dirname + '/public/pdfs/'));

app.use('/', defaultRoute);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        } 
    });
});

module.exports = app;