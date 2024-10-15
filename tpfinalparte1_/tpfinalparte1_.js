
function preload() {
  soundFormats('mp3');
  soundFile = loadSound('data/ding.mp3');

for (let i = 0; i< cant; i++) {
  imagenes [i] = loadImage ("data/img" + i + ".jpg");
}


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
    image(imagenes[2], 0, 0, anchoPantalla, altoPantalla);

    fill (0, 100, 100, 150);
    noStroke();
    rect(0, 400, anchoPantalla, 280);

    fill (colortext);
    stroke(2);
    text(
      misTextos[obtenerTextActual()], inicioTexto, 400, anchoTexto  );
    reload();
  } else if (PANTALLAS === "pant2" ) {
   
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


function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}
