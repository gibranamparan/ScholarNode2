/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing Alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  inscrito: function(req,res){

    Alumno.update(req.param('id'), {inscrito:true}, function AlumnoInscrito(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Alumno/edit/' + req.param('id'));
      }
    });
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

      inscrito: req.param('inscrito'),

    };

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Alumno.create(paramObj, function AlumnoCreated(err, Alumno) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        };
        return res.redirect('/Alumno/new');
      }

      // res.json(Alumno);
      res.redirect('/Alumno/show/' + Alumno.id);

    });
  },

  show: function(req, res, next) {
    Alumno.findOne(req.param('id')).populate("pagos").populate('DocumentosEntregados').
    exec(function foundAlumno(err, Alumno) {
      if (err) return next(err);
      if (!Alumno) return next();
      var Pagos = Alumno.pagos;
      // res.json(Alumno);
    Documento.find(function foundDocumentos(err, Documentos) {
      obj = {
          Alumno: Alumno,
          Pagos:Pagos,
          Documentos:Documentos
      };
      console.log("Alumno");
      console.log(Alumno);
      console.log("pagos");
      console.log(Pagos);
      console.log("documentos");
      console.log(Documentos);
      res.json(obj);

    //});
    });
    });
  },

  index: function(req, res, next) {
    //Debe mostrar solo los primeros 10
    var findLimitAlumnos = Alumno.find();
    findLimitAlumnos.limit(10);
    

    findLimitAlumnos.exec(function callBack(err, Alumnos) {
      if (err) return next(err);
      
      res.json(Alumnos);
    });
    
  },


  listado: function(req, res) {
    res.view('Alumno/listado');
  },

  listadoConBusqueda: function(req, res) {
    nombrebuscado=res.param('nombre');
    //buscar por contenido de subcadena
    Alumno.find(function foundAlumnos(err, Alumnos) {
      if (err) return next(err);
      
      res.json(Alumnos);
    });
  },

  edit: function(req, res, next) {

    Alumno.findOne(req.param('id'), function foundAlumno(err, Alumno) {
      if (err) return next(err);
      if (!Alumno) return next('Alumno doesn\'t exist.');

      res.view({
        Alumno: Alumno
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

      inscrito: req.param('inscrito'),

    };

    Alumno.update(req.param('id'), paramObj, function AlumnoUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        };

        return res.redirect('/Alumno/edit/' + req.param('id'));
      }

      res.redirect('/Alumno/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Alumno.findOne(req.param('id'), function foundAlumno(err, Alumno) {
      if (err) return next(err);

      if (!Alumno) return next('Alumno doesn\'t exist.');

      Alumno.destroy(req.param('id'), function AlumnoDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Alumno');

    });
  }
 

};

