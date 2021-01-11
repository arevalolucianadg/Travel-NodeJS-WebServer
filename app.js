const express = require('express');
const app = express();
const hbs = require('hbs');

// HandleBars HBS Template engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080);
console.log('Servidor corriendo en puerto 8080')