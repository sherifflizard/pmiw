// CONF PANTALLA
let anchoPantalla = 640;
let altoPantalla = 480;

// CONF TEXTO
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;
let colortext;

// IMAGENES
let imagenes = [];
let cant =1;

let cuadrado;

let PANTALLAS;




function reload(){

  //anchoPantalla * 0.020;
  //anchoPantalla * 0.8
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.05;
  inicioTexto = 10;
  
  textSize(tamTexto);
}

function mouseClicked(){
  posTextoActual++;
}

function obtenerTextActual(){
  return posTextoActual;
}
