/**
* Pago.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    descripcion : { type: 'string' },

    cantidad : { type: 'float' },

    fechaPago : { type: 'date' },

    modoPago : { type: 'string' },

    estadoPago : { type: 'string' },

    alumno:{model:"Alumno"}

  }
};

