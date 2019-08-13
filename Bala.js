class Bala {
    constructor(posX, posY, tam, vel) {
        this.posX = posX;
        this.posY = posY;
        this.tam = tam;
        this.vel = vel;
    }
    dibujarBala() {
        fill(255);
        ellipse(this.posX, this.posY += this.vel, this.tam, this.tam);
    }
}