function pantallaempezar() {
  background(10, 0, 0);
  fill(150,100,150);
  textAlign(CENTER);
  textSize(32);
  text("LAPUTA \nEL CASTILLO EN EL CIELO", width / 2, height / 2);
  boton();
}

function creditos() {
  push();
  background(255, 0, 0);

 
  fill(50,50,0);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(100);
  text("Pelicula original : El castillo en el cielo dirigida por Hayao Miyasaki,imagenes: MetaAi, programacion: Rossi, Strack", width / 2, height / 2);
 
  pop();
}
