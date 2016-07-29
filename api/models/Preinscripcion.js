/**
* Preinscripcion.js
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

    municipio : { type: 'string' },

    estado : { type: 'string' },

    pais : { type: 'string' },

    extrangero : { type: 'string' },

    padresMexicanos : { type: 'string' },

    peso : { type: 'float' },

    estatura : { type: 'float' },

    tipoSangre : { type: 'string' },

    antecedentesMedicos : { type: 'string' },

    capacidadDiferente : { type: 'string' },

    otrosAntecedentes : { type: 'string' },

    telefonoCasa : { type: 'string' },

    telefonoCelular : { type: 'string' },

    redSocial : { type: 'string' },

    preparatoria : { type: 'string' },

    especialidad : { type: 'string' },

    promedioFinal : { type: 'float' },

    carreraSolicitada : { type: 'string' },

    segundaOpcion : { type: 'string' },

    turnoEntrevista : { type: 'string' },

    estadoPago : { type: 'string' },

    carrera:{model:"Carrera"}
  }
};

