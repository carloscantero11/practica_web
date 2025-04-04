'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

// Rutas de prueba
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);

// Rutas para proyectos
router.post('/saveproject', ProjectController.saveProject); 
// Guardar un proyecto

router.get('/project/:id?', ProjectController.getProject); 
// Obtener un proyecto por ID

router.put('/project/:id', ProjectController.updateProject); 
// Actualizar un proyecto

router.delete('/project/:id', ProjectController.deleteProject); 
// Eliminar un proyecto

module.exports = router;