
let panta = {
  "principio" : "holi",
  "pantalla1" :
"oooo",
  "pantalla2":
"kkkkkk",
  "pantalla3":
"aaaaaa",
  }





// --------PANTALLAS---------

let pantallas ={
  "principio" :
[panta.pantalla1],
  "pantalla1" :
[panta.pantalla2],
  "pantalla2" :
[panta.pantalla3],


  };

//for (let i = 0; i< 33; i++) {
//    Pantallas [i] = i++ ;



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

function draw() {
  background(255);


  pantallaa();
  // CUADRADO
  fill (0, 100, 100, 150);
  noStroke();
  rect(0, 400, anchoPantalla, 280);
}




function mouseReleased() {
  if (!soundFile.isPlaying())
    soundFile.play();
}



function pantallaa() {
  if (pantallaactiva === "pantalla1") {
    image(imagenes[1], 0, 0, anchoPantalla, altoPantalla);
    fill(0);
    text( misTextos[obtenerTextActual()], inicioTexto, 400, anchoTexto  );


    reload();
  }
}
