class Jugador {
    constructor(posX, posY, tam) {
        this.posX = posX;
        this.posY = posY;
        this.tam = tam;
    }

    dibujarJugador() {
        fill(0, 255, 255);
        rectMode(CENTER);
        rect(this.posX, this.posY, this.tam, this.tam);
    }
}