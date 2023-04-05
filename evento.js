var recuadro = document.querySelector("#recuadro");

//EVENTO DESDE EL DOM//



//EVENTOS DEDE JAVASCRIPT//

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja)

function moverCaja(){

recuadro.style.width = "600px";
recuadro.style.transition = "5s width ease";

}

