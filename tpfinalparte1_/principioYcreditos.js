function pantallaempezar() {
  push();
  background(255, 0, 0);

  if (imagenes[0]) {
    image(imagenes[0], 0, 0, width, height);
  }
  fill(0,100,100,100);
  rect (0,0,700,700);
  fill(50,50,0);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(100);
  text("Laputa,el castillo en el cielo", width / 2, height / 2);
  //dibujaBoton("JUGAR", width / 2, height * 0.75, 200, 40);
  //dibujaBoton("CRÉDITOS", width / 2, height * 0.75 + 60, 200, 40);

  pop();
}

function creditos() {
  push();
  background(255, 0, 0);

 
  fill(50,50,0);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(100);
  text("creditos", width / 2, height / 2);
  //dibujaBoton("JUGAR", width / 2, height * 0.75, 200, 40);
  //dibujaBoton("CRÉDITOS", width / 2, height * 0.75 + 60, 200, 40);

  pop();
}
