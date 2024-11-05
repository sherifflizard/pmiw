
//--------------------------

function estadito (){
if (pantalla == pantallaempezar){
  
}




}

function texto() {
  push();
  textAlign(CENTER);
  textSize(tamTexto);
  fill(255);
  text(misTextos[indicePantalla], 50, 10, anchoTexto, 20*8);// Corrección 20*8 = textSize * 8
  pop();
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
