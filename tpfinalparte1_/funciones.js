function reload(){

  //anchoPantalla * 0.020;
  //anchoPantalla * 0.8
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = 0;
  
  textSize(tamTexto);
}

function mouseClicked(){
  posTextoActual++;
}

function obtenerTextActual(){
  return posTextoActual;
}
