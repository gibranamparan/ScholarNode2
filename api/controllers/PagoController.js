/**
 * PagoController
 *
 * @description :: Server-side logic for managing Pagoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    Alumno.findOne({id:req.param('id')},function(err,alumno){
      if (err) console.log(err);

      res.view({alumno:alumno,accion:"create"});    
    });
  },

  'formPagoPreinscrito': function(req,res){
    Preinscripcion.findOne({id:req.param('id')},function(err,alumno){
      if (err) console.log(err);

      res.view("Pago/new",{alumno:alumno,accion:"validarPago"});    
    });
  },

  'validarPagoPreinscrito': function(req, res) {
    //console.log(req.param('id'));
    Preinscripcion.findOne({id:req.param('id')}, function(err,Preinscrito){
      if (err) console.log(err);
      var newAlumno;
      Grupo.findOne({carrera:Preinscrito.carrera}, function(err,Grupo){
      if(Grupo==null){
        console.log("No hay grupos con esta carrera");
        Grupo.create({nombre:Preinscrito.carrera.nombre+" 1-1",turno:"sin identificar",numAlumnos:50,carrera:Preinscrito.carrera},function newGrupo(err,GrupoCreado){
          if(err){
            console.log("no se pudo crear el Grupo porfavor llame a Erick, ya que el hizo este pedazo de codigo")
          }else{
            newAlumno = {

            nombre: Preinscrito.nombre,

            apellidoPaterno: Preinscrito.apellidoPaterno,

            apellidoMaterno: Preinscrito.apellidoMaterno,

            fechaNacimiento: Preinscrito.fechaNacimiento,

            numeroHijos: Preinscrito.numeroHijos,

            sexo: Preinscrito.sexo,

            estadoCivil: Preinscrito.estadoCivil,

            padreTutor: Preinscrito.padreTutor,

            rfc: Preinscrito.rfc,

            curp: Preinscrito.curp,

            etnia: Preinscrito.etnia,

            empresa: Preinscrito.empresa,

            numDependientes: Preinscrito.numDependientes,

            domicilio: Preinscrito.domicilio,

            email: Preinscrito.email,

            inscrito: false,

            grupo:GrupoCreado,
          }
          }
        });

      } else{
            newAlumno = {

            nombre: Preinscrito.nombre,

            apellidoPaterno: Preinscrito.apellidoPaterno,

            apellidoMaterno: Preinscrito.apellidoMaterno,

            fechaNacimiento: Preinscrito.fechaNacimiento,

            numeroHijos: Preinscrito.numeroHijos,

            sexo: Preinscrito.sexo,

            estadoCivil: Preinscrito.estadoCivil,

            padreTutor: Preinscrito.padreTutor,

            rfc: Preinscrito.rfc,

            curp: Preinscrito.curp,

            etnia: Preinscrito.etnia,

            empresa: Preinscrito.empresa,

            numDependientes: Preinscrito.numDependientes,

            domicilio: Preinscrito.domicilio,

            email: Preinscrito.email,

            inscrito: false,

            grupo:Grupo,
        }
      }

      });
      Alumno.create(newAlumno, function AlumnoCreated(err, Alumno){


      var paramObj = {

      descripcion: req.param('descripcion'),

      cantidad: req.param('cantidad'),

      fechaPago: req.param('fechaPago'),

      modoPago: req.param('modoPago'),

      estadoPago: req.param('estadoPago'),

      alumno: Alumno.id

      }
      
    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Pago.create(paramObj, function PagoCreated(err, Pago) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Preinscripcion/index');
      }

      // res.json(Pago);
      //res.redirect('/Pago/show/' + Pago.id);

    });
    });
    });

  },

  create: function(req, res) {

    Alumno.findOne({id:req.param('id')},function(err,alumno){
      if (err) console.log(err);
      
      var paramObj = {

      descripcion: req.param('descripcion'),

      cantidad: req.param('cantidad'),

      fechaPago: req.param('fechaPago'),

      modoPago: req.param('modoPago'),

      estadoPago: req.param('estadoPago'),

      alumno: alumno.id

      }
      
    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Pago.create(paramObj, function PagoCreated(err, Pago) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Pago/new');
      }

      // res.json(Pago);
      res.redirect('/Pago/show/' + Pago.id);

    });
    });

  },

  show: function(req, res, next) {
    Pago.findOne(req.param('id'), function foundPago(err, Pago) {
      if (err) return next(err);
      if (!Pago) return next();

      // res.json(Pago);
      res.view({
        Pago: Pago
      });
    });
  },

  index: function(req, res, next) {
    Pago.find(function foundPagos(err, Pagos) {
      if (err) return next(err);
      
      res.json(Pagos);
      
    });
  },

  edit: function(req, res, next) {

    Pago.findOne(req.param('id'), function foundPago(err, Pago) {
      if (err) return next(err);
      if (!Pago) return next('Pago doesn\'t exist.');

      res.view({
        Pago: Pago
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      descripcion: req.param('descripcion'),

      cantidad: req.param('cantidad'),

      fechaPago: req.param('fechaPago'),

      modoPago: req.param('modoPago'),

      estadoPago: req.param('estadoPago'),

    }

    Pago.update(req.param('id'), paramObj, function PagoUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Pago/edit/' + req.param('id'));
      }

      res.redirect('/Pago/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Pago.findOne(req.param('id'), function foundPago(err, Pago) {
      if (err) return next(err);

      if (!Pago) return next('Pago doesn\'t exist.');

      Pago.destroy(req.param('id'), function PagoDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Pago');

    });
  }
 

};

