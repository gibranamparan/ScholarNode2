/**
 * DocumentoController
 *
 * @description :: Server-side logic for managing Documentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

      nombre: req.param('nombre'),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Documento.create(paramObj, function DocumentoCreated(err, Documento) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/Documento/new');
      }

      // res.json(Documento);
      res.redirect('/Documento/show/' + Documento.id);

    });
  },

  show: function(req, res, next) {
    Documento.findOne(req.param('id'), function foundDocumento(err, Documento) {
      if (err) return next(err);
      if (!Documento) return next();

      // res.json(Documento);
      res.view({
        Documento: Documento
      });
    });
  },

  index: function(req, res, next) {
    Documento.find(function foundDocumentos(err, Documentos) {
      if (err) return next(err);
      
      res.view({
        Documentos: Documentos
      });
    });
  },

  edit: function(req, res, next) {

    Documento.findOne(req.param('id'), function foundDocumento(err, Documento) {
      if (err) return next(err);
      if (!Documento) return next('Documento doesn\'t exist.');

      res.view({
        Documento: Documento
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      nombre: req.param('nombre'),

    }

    Documento.update(req.param('id'), paramObj, function DocumentoUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/Documento/edit/' + req.param('id'));
      }

      res.redirect('/Documento/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Documento.findOne(req.param('id'), function foundDocumento(err, Documento) {
      if (err) return next(err);

      if (!Documento) return next('Documento doesn\'t exist.');

      Documento.destroy(req.param('id'), function DocumentoDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/Documento');

    });
  }
 

};

