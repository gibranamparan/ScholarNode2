/**
 * CarreraController
 *
 * @description :: Server-side logic for managing Carreras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

      nombre: req.param('nombre'),

      tirular: req.param('tirular'),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Carrera.create(paramObj, function CarreraCreated(err, Carrera) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Carrera/new');
      }

      // res.json(Carrera);
      res.redirect('/Carrera/show/' + Carrera.id);

    });
  },

  show: function(req, res, next) {
    Carrera.findOne(req.param('id'), function foundCarrera(err, Carrera) {
      if (err) return next(err);
      if (!Carrera) return next();

      // res.json(Carrera);
      res.view({
        Carrera: Carrera
      });
    });
  },

  index: function(req, res, next) {
    Carrera.find(function foundCarreras(err, Carreras) {
      if (err) return next(err);
      
      res.view({
        Carreras: Carreras
      });
    });
  },

  edit: function(req, res, next) {

    Carrera.findOne(req.param('id'), function foundCarrera(err, Carrera) {
      if (err) return next(err);
      if (!Carrera) return next('Carrera doesn\'t exist.');

      res.view({
        Carrera: Carrera
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      nombre: req.param('nombre'),

      tirular: req.param('tirular'),

    }

    Carrera.update(req.param('id'), paramObj, function CarreraUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Carrera/edit/' + req.param('id'));
      }

      res.redirect('/Carrera/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Carrera.findOne(req.param('id'), function foundCarrera(err, Carrera) {
      if (err) return next(err);

      if (!Carrera) return next('Carrera doesn\'t exist.');

      Carrera.destroy(req.param('id'), function CarreraDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Carrera');

    });
  }
 

};

