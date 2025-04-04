'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar Archivos Rutas
var project_routes = require('./routes/project');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS


// Rutas
app.use('/api', project_routes);

// Exportar
module.exports = app;