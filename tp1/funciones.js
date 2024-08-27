// hermosas funciones --- cambio, todas pasaron a ser let 

let obra;
let negro;
let azul;
let luminosidad = false;
let luminosidad2 = false;
let aumento = true;
let trans = 0.0;
let invert = true;


//----------------------------------------

//------------ void a function, int a let-------------
function grilla(cant, tam) {
  let circl = tam * 1;
  for (let x = 0; x < width / tam; x++) {
    for (let y = 0; y < cant; y++) {
      if ((x + y) % 2 === 0) {
        fill(invertirColores(azul, negro)); // azul
      } else {
        fill(invertirColores(negro, azul)); // negro
      }
      circle((x * tam) + tam / 2, y * tam + tam / 2, circl);
      rect(x * tam + 400, y * tam, tam, tam);
    }
  }
}

//------------ void a function-------------

function cambiluminosidad() {
  if (aumento) {
    trans += 0.01;
    if (trans >= 1.0) {
      trans = 1.0;
      aumento = false;
    }
  } else {
    trans -= 0.01;
    if (trans <= 0.0) {
      trans = 0.0;
      aumento = true;
    }
  }
  negro = lerpColor(color(6, 13, 29), color(255), trans);
}


//------------ void a function-------------
function cambiluminosidad2(colorAleatorio) {
  if (aumento) {
    trans += 0.01;
    if (trans >= 1.0) {
      trans = 1.0;
      aumento = false;
    }
  } else {
    trans -= 0.01;
    if (trans <= 0.0) {
      trans = 0.0;
      aumento = true;
    }
  }
  azul = lerpColor(colorAleatorio, colorAleatorio, trans);
}

//------------ void a function, boolean a return simple -------------
function invertirColores(color1, color2) {
  return invert ? color2 : color1;
}

//------------ void a function, boolean a return simple -------------
function cosomouse(posmou) {
  return mouseX > posmou;
}
