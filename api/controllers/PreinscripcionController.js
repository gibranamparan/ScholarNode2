/**
 * PreinscripcionController
 *
 * @description :: Server-side logic for managing Preinscripcions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    Carrera.find(function foundCarreras(err,carreras){
      if (err) return next(err);
      console.log(carreras);
      res.view({carreras:carreras});  
    });   
  },
  fichaDeposito: function(req,res){
    res.view();
  },
  create: function(req, res) {

    var paramObj = {

      nombre: req.param('nombre'),

      apellidoPaterno: req.param('apellidoPaterno'),

      apellidoMaterno: req.param('apellidoMaterno'),

      fechaNacimiento: req.param('fechaNacimiento'),

      numeroHijos: req.param('numeroHijos'),

      sexo: req.param('sexo'),

      estadoCivil: req.param('estadoCivil'),

      padreTutor: req.param('padreTutor'),

      rfc: req.param('rfc'),

      curp: req.param('curp'),

      etnia: req.param('etnia'),

      empresa: req.param('empresa'),

      numDependientes: req.param('numDependientes'),

      domicilio: req.param('domicilio'),

      email: req.param('email'),

      municipio: req.param('municipio'),

      estado: req.param('estado'),

      pais: req.param('pais'),

      extrangero: req.param('extrangero'),

      padresMexicanos: req.param('padresMexicanos'),

      peso: req.param('peso'),

      estatura: req.param('estatura'),

      tipoSangre: req.param('tipoSangre'),

      antecedentesMedicos: req.param('antecedentesMedicos'),

      capacidadDiferente: req.param('capacidadDiferente'),

      otrosAntecedentes: req.param('otrosAntecedentes'),

      telefonoCasa: req.param('telefonoCasa'),

      telefonoCelular: req.param('telefonoCelular'),

      redSocial: req.param('redSocial'),

      preparatoria: req.param('preparatoria'),

      especialidad: req.param('especialidad'),

      promedioFinal: req.param('promedioFinal'),

      carreraSolicitada: req.param('carreraSolicitada'),

      segundaOpcion: req.param('segundaOpcion'),

      turnoEntrevista: req.param('turnoEntrevista'),

      estadoPago: req.param('estadoPago'),

      carrera:req.param('carrera')

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Preinscripcion.create(paramObj, function PreinscripcionCreated(err, Preinscripcion) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Preinscripcion/fichaDeposito');
      }

      // res.json(Preinscripcion);
      //res.redirect('/Preinscripcion/show/' + Preinscripcion.id);

    });
  },

  show: function(req, res, next) {
    Preinscripcion.findOne(req.param('id'), function foundPreinscripcion(err, Preinscripcion) {
      if (err) return next(err);
      if (!Preinscripcion) return next();
      // res.json(Preinscripcion);
      res.view({
        Preinscripcion: Preinscripcion
      });
    });
  },

  index: function(req, res, next) {
    Preinscripcion.find().populate("carrera").exec(function foundPreinscripcions(err, Preinscripcions) {
      if (err) return next(err);
      
      res.view({
        Preinscripcions: Preinscripcions
      });
    });
  },

  edit: function(req, res, next) {

    Preinscripcion.findOne(req.param('id'), function foundPreinscripcion(err, Preinscripcion) {
      if (err) return next(err);
      if (!Preinscripcion) return next('Preinscripcion doesn\'t exist.');

      res.view({
        Preinscripcion: Preinscripcion
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      nombre: req.param('nombre'),

      apellidoPaterno: req.param('apellidoPaterno'),

      apellidoMaterno: req.param('apellidoMaterno'),

      fechaNacimiento: req.param('fechaNacimiento'),

      numeroHijos: req.param('numeroHijos'),

      sexo: req.param('sexo'),

      estadoCivil: req.param('estadoCivil'),

      padreTutor: req.param('padreTutor'),

      rfc: req.param('rfc'),

      curp: req.param('curp'),

      etnia: req.param('etnia'),

      empresa: req.param('empresa'),

      numDependientes: req.param('numDependientes'),

      domicilio: req.param('domicilio'),

      email: req.param('email'),

      municipio: req.param('municipio'),

      estado: req.param('estado'),

      pais: req.param('pais'),

      extrangero: req.param('extrangero'),

      padresMexicanos: req.param('padresMexicanos'),

      peso: req.param('peso'),

      estatura: req.param('estatura'),

      tipoSangre: req.param('tipoSangre'),

      antecedentesMedicos: req.param('antecedentesMedicos'),

      capacidadDiferente: req.param('capacidadDiferente'),

      otrosAntecedentes: req.param('otrosAntecedentes'),

      telefonoCasa: req.param('telefonoCasa'),

      telefonoCelular: req.param('telefonoCelular'),

      redSocial: req.param('redSocial'),

      preparatoria: req.param('preparatoria'),

      especialidad: req.param('especialidad'),

      promedioFinal: req.param('promedioFinal'),

      carreraSolicitada: req.param('carreraSolicitada'),

      segundaOpcion: req.param('segundaOpcion'),

      turnoEntrevista: req.param('turnoEntrevista'),

      estadoPago: req.param('estadoPago'),

    }

    Preinscripcion.update(req.param('id'), paramObj, function PreinscripcionUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Preinscripcion/edit/' + req.param('id'));
      }

      res.redirect('/Preinscripcion/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Preinscripcion.findOne(req.param('id'), function foundPreinscripcion(err, Preinscripcion) {
      if (err) return next(err);

      if (!Preinscripcion) return next('Preinscripcion doesn\'t exist.');

      Preinscripcion.destroy(req.param('id'), function PreinscripcionDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Preinscripcion');

    });
  }
 

};

