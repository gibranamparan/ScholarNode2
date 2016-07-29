/**
 * GrupoController
 *
 * @description :: Server-side logic for managing Grupoes
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

  create: function(req, res) {

    var paramObj = {

      nombre: req.param('nombre'),

      turno: req.param('turno'),

      numAlumnos: req.param('numAlumnos'),

      carrera:req.param('carrera')

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Grupo.create(paramObj, function GrupoCreated(err, Grupo) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Grupo/new');
      }

      // res.json(Grupo);
      res.redirect('/Grupo/show/' + Grupo.id);

    });
  },

  show: function(req, res, next) {
    Grupo.findOne(req.param('id')).populate("carrera")
    .exec(function foundGrupo(err, Grupo) {
      if (err) return next(err);
      if (!Grupo) return next();

      // res.json(Grupo);
      res.view({
        Grupo: Grupo
      });
    });
  },

  index: function(req, res, next) {
    Grupo.find().populate("carrera").exec(function foundGrupos(err, Grupos) {
      if (err) return next(err);
      
      res.view({
        Grupos: Grupos
      });
    });
  },

  edit: function(req, res, next) {

    Grupo.findOne(req.param('id'), function foundGrupo(err, Grupo) {
      if (err) return next(err);
      if (!Grupo) return next('Grupo doesn\'t exist.');

      res.view({
        Grupo: Grupo
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      nombre: req.param('nombre'),

      turno: req.param('turno'),

      numAlumnos: req.param('numAlumnos'),

    }

    Grupo.update(req.param('id'), paramObj, function GrupoUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Grupo/edit/' + req.param('id'));
      }

      res.redirect('/Grupo/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Grupo.findOne(req.param('id'), function foundGrupo(err, Grupo) {
      if (err) return next(err);

      if (!Grupo) return next('Grupo doesn\'t exist.');

      Grupo.destroy(req.param('id'), function GrupoDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Grupo');

    });
  }
 

};

