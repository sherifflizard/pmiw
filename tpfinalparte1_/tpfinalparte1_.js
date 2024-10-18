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


let boton1;
let boton2;
let click = false;


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

function draw() {
  background(255);


  if (pantallaa === "principio") {
    pantallas(pantallaInicio);
    image (imagenes[0], 0, 0, 0);
  }



  fill (0, 100, 100, 150);
  noStroke();
  rect(0, 400, anchoPantalla, 280);
}



//------------------------------------------
function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}


//------------------------------------------
function pantallaa(pantallaactiva, misTextos) {
  image(imagenes[pantallaactiva], 0, 0, anchoPantalla, altoPantalla);
  fill(0);
  text( misTextos[pantallaactiva], inicioTexto, 400, anchoTexto  );


  reload();
}


function mousePressed () {

  clic= true;
  console.log ("pantalla"+ pantallaactiva);
}
