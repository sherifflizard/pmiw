class personaje {
constructor () {
this.posx=320;
this.posy =340;
this.alto = 100
this.ancho =100;
this.colorcit = color (200,100,0);
}


dibujar () {
fill (this.colorcit);
rect (this.posx, this.posy,this.alto,this.ancho);


}
}
