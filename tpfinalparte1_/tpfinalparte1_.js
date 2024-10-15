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


let cuadrado;

let PANTALLAS;



function preload() {
  soundFormats('mp3');
  soundFile = loadSound('data/ding.mp3');

  imagenes = new Array (10);
  imagenes[0] =  loadImage("data/uno.jpeg");
  imagenes[1] =  loadImage("data/dos.jpg");

  misTextos = loadStrings('data/aventura.txt');
}

function setup() {
  createCanvas(anchoPantalla, altoPantalla);

cuadrado = rect(0, 400, anchoPantalla, 280);

  colortext = color (255);

  PANTALLAS = "pant1";
}

function draw() {
  background(255);

  // Estado: pantalla1
  if (PANTALLAS === "pant1" ) {
    image(imagenes[0], 0, 0, anchoPantalla, altoPantalla);

    fill (0, 100, 100, 150);
    noStroke();
    rect(0, 400, anchoPantalla, 280);

    fill (colortext);
    stroke(2);
    text(
      misTextos[obtenerTextActual()], inicioTexto, 400, anchoTexto  );
    reload();
  } else if (PANTALLAS === "pant2" ) {
    image(imagenes[1], 0, 0, anchoPantalla, altoPantalla);
    fill (0, 20, 100);
    noStroke();
  rect(0, 400, anchoPantalla, 280); 
    fill (colortext);
    stroke(2);
    text(
      misTextos[obtenerTextActual()], inicioTexto, 400, anchoTexto  );
    reload();
  }
}


function mousePressed() {
  if (PANTALLAS=== "pant1" ) {
    PANTALLAS = "pant2";
  }
}

function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}
