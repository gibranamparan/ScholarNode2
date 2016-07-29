/**
 * DocumentoController
 *
 * @description :: Server-side logic for managing Documentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	entregaDocumentos: function(req,res){
		//Areglo de coumentos entregados
		IDsDocumentosEntregados=req.param("documentos");

		arregloDeDocumentosenJson = new Array();
    	IDsDocumentosEntregados.forEach(function(value,index){
    		arregloDeDocumentosenJson[index] = {
    			Documento : value,
    			alumno : req.param("idAlumno")
    		}
    	});
    	console.log(arregloDeDocumentosenJson);
		DocumentosEntregados.destroy({alumno:req.param("idAlumno")}, function AlumnoDestroyed(err){
	        if (err) return next(err);
	        //Buscar el alumno
	        Alumno.findOne(req.param("idAlumno")).populate("DocumentosEntregados").exec(function(err, alumno){

        		//alumno.DocumentosEntregados.add(IDsDocumentosEntregados);
        		alumno.DocumentosEntregados.add(arregloDeDocumentosenJson);
        		var id = req.param("idAlumno");
		        alumno.save(function(err){
			      if (err) { return res.serverError(err); }
			      return res.redirect('/Alumno/show/' + id);
			    });//</save()>
	        });
		});
	} 
}