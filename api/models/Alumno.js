/**
* Alumno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    nombre : { type: 'string' },

    apellidoPaterno : { type: 'string' },

    apellidoMaterno : { type: 'string' },

    fechaNacimiento : { type: 'date' },

    numeroHijos : { type: 'integer' },

    sexo : { type: 'string' },

    estadoCivil : { type: 'string' },

    padreTutor : { type: 'string' },

    rfc : { type: 'string' },

    curp : { type: 'string' },

    etnia : { type: 'string' },

    empresa : { type: 'string' },

    numDependientes : { type: 'integer' },

    domicilio : { type: 'string' },

    email : { type: 'email' },

    inscrito : { type: 'boolean' },

    pagos:{collection:"Pago",via:"alumno"},

    grupo:{model:"Grupo"},
    DocumentosEntregados:{collection:"DocumentosEntregados",via:"alumno"}
  }
};

