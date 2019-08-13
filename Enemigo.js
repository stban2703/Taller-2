class Enemigo{
    constructor(posX, posY, ancho, alto, r, g, b, resistencia, velocidad){
        this.posX=posX;
        this.posY=posY;
        this.ancho=ancho;
        this.alto=alto;
        this.r=r;
        this.g=g;
        this.b=b;
        this.resistencia=resistencia;
        this.velocidad=velocidad;
    }

    moverEnemigo(){
    this.posY += this.velocidad;
    
    }
}