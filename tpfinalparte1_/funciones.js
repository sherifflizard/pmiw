// CONF PANTALLA
let anchoPantalla = 640;
let altoPantalla = 480;

// CONF TEXTO
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;
let colortext;
let misTextos = [];


// IMAGENES
let imagenes = [];
let cant =4;


//indicacion de estado
let pantallaactiva = "pantalla1";





//--------------------------

function reload(){
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.05;
  inicioTexto = 10;
  
  textSize(tamTexto);
}


//-------
function mouseClicked(){
  posTextoActual++;
}

//-------
function obtenerTextActual(){
  return posTextoActual;
}
function obtenerTextActual(){
  return posTextoActual;
}
