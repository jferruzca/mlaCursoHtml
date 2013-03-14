var imgCarro = "crojo.jpg";
var imgRuedas = "llanta1.png";
var imgTecho = "techo1.png";

$(document).on("ready", inicio);
function inicio () 
{
	//Aqui va todo el codigo relacionado con DOM
	$("#personalizar").on("click", movida);
	pinta_canvas();
}
function movida () 
{
	//JSON
	var cambiosCSS =
	{
		margin: 0,
		height: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosPersonalizacion =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};
	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosPersonalizacion);
	$("#color div").on("click", cambiarColor);
	$("#llantas img").on("click", cambiarLlantas);
	$("#techo img").on("click", cambiarTecho);
}
function cambiarColor (datos) 
{
	var colorito = datos.currentTarget.id;
	//Cambia IMG para coche
	var nuevoCoche = "c" + colorito + ".jpg";
	//$("#cochecito img").attr("src", nuevoCoche);
	imgCarro = nuevoCoche;
	pintaCarro();
	//Cambia texto de descripción de coche.
	$("#txtColor").html("<strong>Color:</strong> "+colorito);
}

function cambiarLlantas() 
{
	imgRuedas = $(this).attr("src");
	pintaCarro();
}

function cambiarTecho() 
{
	imgTecho = $(this).attr("src");
	pintaCarro();
}

function pinta_canvas(){
var canvas = document.getElementById('elCoche');
	if (canvas.getContext){ 
		var ctx = canvas.getContext('2d');
 		pintaCarro('crojo.jpg', 1);
	} else {
 		alert("Su navegador no soporta canvas");
	}
}

function pintaCarro(){
var canvas = document.getElementById('elCoche');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		var img1 = new Image(); //Crea un objeto image
		var imgLlanta1 = new Image();
		var imgLlanta2 = new Image();
		var imgTecho1 = new Image();
		canvas.width = 1000;
		canvas.height = 528;
		img1.onload = function(){
			ctx.drawImage(img1,0,0);
			ctx.drawImage(img1,0,0,canvas.width,canvas.height);
			ctx.drawImage(imgLlanta1,135,210,170,170);
			ctx.drawImage(imgLlanta2,735,200,180,180);
			ctx.drawImage(imgTecho1,420,50,255,125);
		}
		img1.src=imgCarro;
		imgLlanta1.src=imgRuedas;
		imgLlanta2.src=imgRuedas;
		imgTecho1.src =imgTecho;
	}
}