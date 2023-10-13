// Load Node modules
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const ejs = require('ejs');

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.get('/contact', function (req, res) {
    res.render('pages/contact');
});

app.get('/product-2', function (req, res) {
    res.render('pages/product-2');
});

app.get('/projects', function (req, res) {
    res.render('pages/projects');
});

app.get('/maps', function (req, res) {
    res.render('pages/maps');
});

