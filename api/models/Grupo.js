/**
* Grupo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    nombre : { type: 'string' },

    turno : { type: 'string' },

    numAlumnos : { type: 'integer' },

    carrera:{model:"Carrera"},
 
    alumnos:{collection:"Alumno",via:"grupo"}
  }
};

