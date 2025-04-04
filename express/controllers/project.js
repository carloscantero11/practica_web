'use strict';

var Project = require('../models/projects');

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: 'Soy el Home',
    });
  },

  test: function (req, res) {
    return res.status(200).send({
      message: 'Soy el Test',
    });
  },

  saveProject: async function (req, res) {
    try {
      const params = req.body;

      if (!params.name || !params.description) {
        return res.status(400).send({ message: 'El nombre y la descripción son obligatorios.' });
      }

      const project = new Project({
        name: params.name,
        description: params.description,
        category: params.category,
        year: params.year,
        langs: params.langs,
        image: null,
      });

      const projectStored = await project.save();
      if (!projectStored) {
        return res.status(404).send({ message: 'No se ha podido guardar el proyecto.' });
      }

      return res.status(200).send({ project: projectStored });
    } catch (err) {
      return res.status(500).send({ message: 'Error al guardar el documento', error: err.message });
    }
  },

  getProject: function (req, res) {
    const projectId = req.params.id;

    // Verifica si el projectId es válido
    if (!projectId) {
      return res.status(404).send({ message: 'El ID del proyecto no es válido.' });
    }

    // Busca el proyecto por ID
    Project.findById(projectId)
      .then((project) => {
        // Si no se encuentra el proyecto
        if (!project) {
          return res.status(404).send({ message: 'El proyecto no existe.' });
        }

        // Devuelve el proyecto encontrado
        return res.status(200).send({ project });
      })
      .catch((err) => {
        // Manejo de errores
        return res.status(500).send({ message: 'Error al devolver los datos.', error: err.message });
      });
  },

  updateProject: async function (req, res) {
    try {
      const projectId = req.params.id;
      const updateData = req.body;

      // Verifica si el projectId es válido
      if (!projectId) {
        return res.status(404).send({ message: 'El ID del proyecto no es válido.' });
      }

      // Busca y actualiza el proyecto
      const projectUpdated = await Project.findByIdAndUpdate(
        projectId,
        updateData,
        { new: true } // Devuelve el documento actualizado
      );

      // Si no se encuentra el proyecto
      if (!projectUpdated) {
        return res.status(404).send({ message: 'El proyecto no existe.' });
      }

      // Devuelve el proyecto actualizado
      return res.status(200).send({ project: projectUpdated });
    } catch (err) {
      // Manejo de errores
      return res.status(500).send({ message: 'Error al actualizar el proyecto.', error: err.message });
    }
  },

  deleteProject: async function (req, res) {
    try {
      const projectId = req.params.id;

      // Verifica si el projectId es válido
      if (!projectId) {
        return res.status(404).send({ message: 'El ID del proyecto no es válido.' });
      }

      // Busca y elimina el proyecto
      const projectDeleted = await Project.findByIdAndDelete(projectId);

      // Si no se encuentra el proyecto
      if (!projectDeleted) {
        return res.status(404).send({ message: 'El proyecto no existe.' });
      }

      // Devuelve el proyecto eliminado
      return res.status(200).send({ project: projectDeleted });
    } catch (err) {
      // Manejo de errores
      return res.status(500).send({ message: 'Error al eliminar el proyecto.', error: err.message });
    }
  },
};

module.exports = controller;