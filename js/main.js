/* Typed JS */
const typed = new Typed('.typed', {
	strings: [
		'<i class="teclado">Creación</i>',
		'<i class="teclado">Diseño</i>',
		'<i class="teclado">Proyectos</i>'
	],

	typeSpeed: 40, // Velocidad de escritura
	startDelay: 500, // Tiempo para empezar a escribir cuando se recarga la pagina
	backSpeed: 45, // Velocidad de borrado
	shuffle: false, // Alterar el orden en que se escriben las palabras
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra
	loop: true, // Repetir el array de strings
	loopCount: false,
	showCursor: true,
	cursorChar: '|'
});

/* Slider */
$('.galeria').bxSlider({
	auto: true,
	mode: 'fade',
	captions: false,
	slideWidth: 500,
	responsive: true,
	pager: false,
	controls: false,
	speed: 1000,
});

//Codigo javascript para agregar la funcion del boton claro/oscuro
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active-button');

	// Guardamos el modo en localStorage
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	}else{
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active-button');
}else{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active-button');
}

// Boton scroll arriba
$(document).ready(() => {

	$(window).scroll(function(){

		if($(window).scrollTop() > 200){
			$('.scroll-top').css({
				"opacity": "1", "pointer-events":"auto"
			});
		}else{
			$('.scroll-top').css({
				"opacity": "0", "pointer-events":"none"
			});
		}

	});
	$('.scroll-top').click(function(){
		$('html').animate({scrollTop:0}, 500);
	});
});
