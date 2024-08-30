//// Rossi Francisca
//Comi 4
// Trabajo practico anterior https://github.com/sherifflizard/ipmi/tree/tprec/tp3


//NUEVO trabajo practico: https://youtu.be/504YoIf8GBo

//------------------------------------



function preload() {
  obra = loadImage('data/opart.jpeg'); // Cargar la imagen
}

function setup() {
  createCanvas(800, 400);
  background(0);

  azul = color(37, 40, 183);
  negro = color(6, 13, 29);
}

function draw() {
  background(0);

  grilla(3, 133);

  // OJITO ----- cambio de float a let
  if (cosomouse(400)) {
    let circlX = map(mouseX, 0, width, 550, 590);
    let circlY = map(mouseY, 0, height, 186, 210);
    fill(negro);
    noStroke(); //cambio, el ojo se hace chiquito al no tener stroke
    circle(circlX, circlY, 80);
    fill(azul);
    circle(circlX, circlY, 40);
  }

  // Condiciona el lerpcolor ---- sin cambio
  if (luminosidad) {
    cambiluminosidad();
  } else {
    negro = color(6, 13, 29);
  }

  if (luminosidad2) {
    cambiluminosidad2(color(random(255), random(255), random(255)));
  } else {
    azul = color(37, 40, 183);
  }

  // Imagen
  image(obra, 0, 0);
}
// cambio print pasa a ser console.log
function keyPressed() {
  if (key === 'V' || key === 'v') {
    luminosidad = !luminosidad;
    console.log("Tecla 'v' funca. Estado de luminosidad: " + luminosidad);
  }
  if (key === 'X' || key === 'x') {
    luminosidad2 = !luminosidad2;
    console.log("Tecla 'x' funca. Estado de luminosidad2: " + luminosidad2);
  }

  if (key === 'R' || key === 'r') {
    luminosidad2 = false;
    luminosidad = false;
    mouseX = 0;
    mouseY = 0;
    invert = false;
    console.log("reset :)");
  }
}
//Cambio -- void pasa a ser function
function mousePressed() {
  invert = !invert;
  console.log("invertido :O");
}
