//Comisión 4

//Christian Strack
// 119149/4

//Fransisca Rossi
//

//tenemos en cuenta que el trabajo no esta completo, asique quisieramos saber en la devolución que hicimos mal...
//Que cosas estuvimos cerca pero no las vimos o tambien que cosas hicimos bien para no toquetearlas luego.
//Gracias

// CONF PANTALLA
let anchoPantalla = 640;
let altoPantalla = 480;

// CONF TEXTOS
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;
let colortext;
let misTextos = [];


// IMAGENES
let imagenes = [];
let cant = 16;

// Indicador de estado
let pantallaactiva = "principio";
let indicePantalla = 0;

// Dimensiones del botón
let botonPosX = anchoPantalla * 0.5;
let botonPosY = altoPantalla * 0.8;
let botonPosY2 = altoPantalla * 0.9;
let botonAltura = altoPantalla * 0.09;
let botonAnchura = anchoPantalla * 0.2;

// --------PANTALLAS---------
let pantallas = [];

//----------------
function preload() {

  // SONIDO
  soundFormats('mp3');
  soundFile = loadSound('data/ding.mp3');


  // Carga de imágenes
  for (let i = 0; i < cant; i++) {
    imagenes[i] = loadImage("data/img" + i + ".jpg");
  }
  misTextos = loadStrings('data/aventura.txt');
}

//----------




function setup() {
  createCanvas(anchoPantalla, altoPantalla);

  // Agregar funciones de pantalla al array
  pantallas.push(pantallaempezar);
  pantallas.push(pantalla1);
  pantallas.push(pantalla2);
  pantallas.push(pantalla3);
  pantallas.push(pantalla4);
  pantallas.push(pantalla5);
  pantallas.push(pantalla6);
  pantallas.push(pantalla7);
  pantallas.push(pantalla8);
  pantallas.push(pantalla9);
  pantallas.push(pantalla10);
  pantallas.push(pantalla11);
  pantallas.push(pantalla12);
  pantallas.push(pantalla13);
  pantallas.push(pantalla14);
  pantallas.push(pantalla15);

  pantallas.push(pantalla16);
  pantallas.push(pantalla17);
  pantallas.push(pantalla18);
  pantallas.push(pantalla19);
  pantallas.push(pantalla20);
  pantallas.push(pantalla21);
  pantallas.push(pantalla22);

  colortext = color (255);

  reload();
}
//---------------------


// Función draw
function draw() {
  // Llamar a la función de la pantalla actual
  if (indicePantalla < pantallas.length) {
    pantallas[indicePantalla]();
  }
}


function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}
//------------------------------------------
// Función de cambio de pantalla al hacer clic
function mouseClicked() {
  if (mouseX > botonPosX - botonAnchura / 2 && mouseX < botonPosX + botonAnchura / 2 &&
    mouseY > botonPosY - botonAltura / 2 && mouseY < botonPosY + botonAltura / 2) {

    // Cambiar a la siguiente pantalla
    if (indicePantalla < pantallas.length - 1) {
      indicePantalla++;
      console.log("Botón clickeado, cambiando a pantalla " + (indicePantalla + 1));
    } else {
      indicePantalla = 0; // Regresar a pantalla inicial
      console.log("Regresando a pantalla inicial");
    }
  }
}
