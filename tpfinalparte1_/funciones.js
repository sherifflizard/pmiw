
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
function botonReinicio() {
  push();
  rectMode(CENTER);
  fill(0, 200);
  rect(botonPosX, botonPosY, botonAnchura, botonAltura);
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("REINICIAR", botonPosX, botonPosY);
  pop();
}

function boton() {
  push();
  rectMode(CENTER);
  fill(0, 200);
  rect(botonPosX, botonPosY, botonAnchura, botonAltura);
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("SIGUIENTE", botonPosX, botonPosY);
  pop();
}

function dosBotones() {
  push();
  rectMode(CENTER);
  fill(0, 200);
  rect(botonPosX, botonPosY, botonAnchura, botonAltura);
  rect(botonPosX, botonPosY2, botonAnchura, botonAltura);
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("SIGUIENTE1", botonPosX, botonPosY);
  text("SIGUIENTE2", botonPosX, botonPosY2);
  pop();
}

function pantallaUnBoton() {
  background(255, 255, 0);
  if (indicePantalla < imagenes.length) {
    image(imagenes[indicePantalla], 0, 0, width, height);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Pantalla" + indicePantalla, width / 2, height / 2);
    textSize(tamTexto);
    text(misTextos[indicePantalla], 0, 0);
  }
  boton();
}

function pantallaDosBotones() {
  background(255, 255, 0);
  if (indicePantalla < imagenes.length) {
    image(imagenes[indicePantalla], 0, 0, width, height);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Pantalla" + indicePantalla, width / 2, height / 2);// Dibuja la imagen correspondiente
  }
  dosBotones();
}



//pantallas

function pantalla1() {
  pantallaUnBoton();
}

function pantalla2() {
  pantallaDosBotones();
}

function pantalla3() {
  pantallaUnBoton();
}

function pantalla4() {
  pantallaUnBoton();
}

function pantalla5() {
  pantallaDosBotones();
}

function pantalla6() {
  pantallaDosBotones();
}

function pantalla7() {
  pantallaDosBotones();
}

function pantalla8() {
  pantallaUnBoton();
}

function pantalla9() {
  pantallaDosBotones();
}

function pantalla10() {
  pantallaUnBoton();
}

function pantalla11() {
  pantallaUnBoton();
}

function pantalla12() {
  pantallaUnBoton();
}

function pantalla13() {
  pantallaUnBoton();
}

function pantalla14() {
  pantallaDosBotones();
}

function pantalla15() {
   background(255, 255, 0);
  if (indicePantalla < imagenes.length) {
    image(imagenes[indicePantalla], 0, 0, width, height);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Pantalla" + indicePantalla, width / 2, height / 2);
    textSize(tamTexto);
    text(misTextos[indicePantalla], 0, 0);
  }
  botonReinicio();
}

function pantalla16() {
  pantallaUnBoton();
}

function pantalla17() {
  pantallaUnBoton();
}

function pantalla18() {
  pantallaUnBoton();
}

function pantalla19() {
  pantallaDosBotones();
}

function pantalla20() {
  pantallaUnBoton();
}

function pantalla21() {
  pantallaDosBotones();
}

function pantalla22() {
  pantallaUnBoton();
}
