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

	$("form input[name='date']").datepicker({
		dateFormat: "dd/mm/yy"
	});

	$.validate({
		lang: 'es'
	});

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
