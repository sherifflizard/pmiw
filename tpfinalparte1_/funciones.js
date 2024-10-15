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
