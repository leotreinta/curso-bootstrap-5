 //comentario

//variables 
/*
var texto="esto es un texto";
var numero=1;
var arreglo=["uno,dos,tres"];
var objetos={"propiedad1": "valor1","propiedad2":"valor2"};
var etiqueta1= document.querySelector("#etiqueta1");
var igual=document.querySelectorAll(".igual");

//ctrl+shif+q
console.log("igual", igual);


//funciones 
function cambiarColor (){

if(igual[0].innerHTML=="leo"){

	igual[0].style.background="blue";
	igual[0].style.color="black";
	igual[1].style.background="green";
	igual[1].style.color="black";


}else{
	igual[0].style.background="green";
	igual[0].style.color="black";

	igual[1].style.background="green";
	igual[1].style.color="black";

}
}
//eventos 
etiqueta1.addEventListener("click",cambiarColor);


//condiciones
*/

//js nativo 
/*
document.querySelector("#etiqueta1").addEventListener("click", cambiarColor);
*/
//mismo codigo en jquery

var igual= $(".igual")

$("#etiqueta1").click(function){

	if($(igual[0].html()=="leo"){
		for (var i = 0; i < igual.length; i++) {
		 
		 $(igual[i]).css({"backgrund":"purple","color":"black"})
		}
	}

}
