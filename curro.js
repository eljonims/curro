document.addEventListener("DOMContentLoaded",iniciar);

var bucle;
var ms = 2000; // tiempo en milisegundos para completar la respuesta

function iniciar(){
	console.log("iniciado");
	bucle = setInterval(bucleFn,ms);
}

