function pantallaInicio() {
  push();
  background(255, 0, 0);

  if (imagenes[0]) {
    image(imagenes[0], 0, 0, width, height);
  }

  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Need Of Speed\n¿Estás preparado\npara esta aventura?", width / 2, height / 2);
  //dibujaBoton("EMPEZAR", width / 2, height * 0.75, 200, 40);
  //dibujaBoton("CRÉDITOS", width / 2, height * 0.75 + 60, 200, 40);
  pop();
}
