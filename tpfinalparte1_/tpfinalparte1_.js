// CONF PANTALLA
let anchoPantalla = 640;
let altoPantalla = 480;

// CONF TEXTO
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;

// IMAGENES
let imagenes = [];

let PANTALLAS;



function preload() {
 imagenes = new Array (10);
 imagenes[0] =  loadImage("data/uno.jpeg");
  imagenes[1] =  loadImage("data/dos.jpg");
  
  misTextos = loadStrings('data/aventura.txt');
}

function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  
  PANTALLAS = "pant1";
}

function draw() {
  background(255);
  
  // Estado: pantalla1
  if (PANTALLAS === "pant1" ) {
    image(imagenes[0], 0, 0, anchoPantalla,altoPantalla);
    fill (0,20,100);
    noStroke();
 rect(0, 400, anchoPantalla, 280);
 fill (0);
    stroke(2);
   text(
    misTextos[obtenerTextActual()],inicioTexto, 400, anchoTexto  );
 reload();
  
  }
  
  else if (PANTALLAS === "pant2" ) {
    image(imagenes[1], 0, 0, anchoPantalla,altoPantalla);
    fill (0,20,100);
    noStroke();
 rect(0, 400, anchoPantalla, 280);
 fill (0);
    stroke(2);
   text(
    misTextos[obtenerTextActual()],inicioTexto, 400, anchoTexto  );
 reload();
  }
}





function mousePressed() {
  if (PANTALLAS=== "pant1" ) {
    PANTALLAS = "pant2";
    
  }
}
