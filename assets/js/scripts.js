//Toggle from main menu when button is clicked
$("#btn-menu-toggle").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("glyphicon-menu-right");
    $(this).toggleClass("glyphicon-menu-left");
    toggleMenu();
});

function toggleMenu(){
    $("#wrapper").toggleClass("toggled");
    $("#wrapper").toggleClass("open-menu");
    $('.sidebar-nav li a span').toggleClass('invisible');
    $('.sidebar-nav ul.dropdown-menu').toggleClass('menu-open');
}

//Slidedown transition in submenus
$('.sidebar-nav li.dropdown').click(function(){
	$(this).children('.dropdown-menu').slideToggle();
});

//Función para correr los servicios de DataTable en la lista de Alumnos,
// mostandolos en una tabla de registros.
$(document).ready(function() {
    $('#tableAlumno').DataTable();
} );