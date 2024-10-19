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
let pantallaactiva = "principio";


let botonPosX1 = anchoPantalla * 0.4;
let botonPosX2 = anchoPantalla * 0.6;
let botonPosX = anchoPantalla * 0.5;
let botonPosY = altoPantalla * 0.8;
let botonAltura = altoPantalla * 0.1;
let botonAnchura = anchoPantalla * 0.2;

let clic = false;

// --------PANTALLAS---------

let pantallas = ["principio"];

for (let i = 1; i <= 22; i++) {
  pantallas.push("pantalla" + i);
}

//----------------
function preload() {
  // SONIDO
  soundFormats('mp3');
  soundFile = loadSound('data/ding.mp3');


  // IMAGENES
  for (let i = 0; i< cant; i++) {
    imagenes [i] = loadImage ("data/img" + i + ".jpg");
  }
  //TEXTOS
  misTextos = loadStrings('data/aventura.txt');
}

//----------


function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  colortext = color (255);

  reload();
}

//---------------------
function pantallaempezar() {
  push();
  background(255, 0, 0);

  if (imagenes[0]) {
    image(imagenes[0], 0, 0, width, height);
  }
  fill(0, 100, 100, 100);
  rect (0, 0, 700, 700);
  fill(50, 50, 0);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(100);
  text("Laputa,el castillo en el cielo", width / 2, height / 2);
  //dibujaBoton("JUGAR", width / 2, height * 0.75, 200, 40);
  //dibujaBoton("CRÉDITOS", width / 2, height * 0.75 + 60, 200, 40);
  boton();
  pop();
}

function pantallaDosBotones() {
  push();
  background(255, 0, 0);

  if (imagenes[0]) {
    image(imagenes[0], 0, 0, width, height);
  }
  fill(0, 100, 100, 100);
  rect (0, 0, 700, 700);
  fill(50, 50, 0);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(100);
  text("Laputa,el castillo en el cielo", width / 2, height / 2);
  dosBotones();
  pop();
}



function draw() {
  background(255);

  // IFS DE PANTALLAAAAAAS

  if (pantallaactiva === "principio") {
    pantallaempezar ();
  }

  fill (0, 100, 100, 150);
  rect(0, 400, anchoPantalla, 280);
}

//------------------------------------------
function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}

//------------------------------------------
function mostrarpatalla (pantallaactiva, misTextos) {
  image(imagenes[pantallaactiva], 0, 0, anchoPantalla, altoPantalla);
  fill(0);
  text( misTextos[pantallaactiva], inicioTexto, 400, anchoTexto  );

  reload();
}

function mousePressed() {
  if (mouseX > botonPosX - botonAnchura / 2 && mouseX < botonPosX + botonAnchura / 2 &&
    mouseY > botonPosY - botonAltura / 2 && mouseY < botonPosY + botonAltura / 2) {
    pantallaactiva = "pantalla1";
    console.log("Botón clickeado, cambiando a pantalla1");
  }
}

function boton() {
  push();
  rectMode(CENTER);
  fill(0);
  rect(botonPosX, botonPosY, botonAnchura, botonAltura);
  pop();
}

function dosBotones() {
  push();
  rectMode(CENTER);
  fill(0, 255, 0);
  rect(botonPosX1, botonPosY, botonAnchura, botonAltura);
  rect(botonPosX2, botonPosY, botonAnchura, botonAltura);
  pop();
}
