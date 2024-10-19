
//--------------------------

function reload() {
  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.05;
  inicioTexto = 10;

  textSize(tamTexto);
}


//-------
function mouseClicked() {
  posTextoActual++;
}

//-------
function obtenerTextActual() {
  return posTextoActual;
}


//______________

//usar para pantallas de siguiente, c/ parametros asi se puede reeutilizar jijiji
function unboton() {
}


//usar para pantallas que tengan dos botones  c/ parametros asi se puede reeutilizar jijiji
function dosboton() {
}
