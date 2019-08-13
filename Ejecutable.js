let jugador
let balas
let enemigos;
function setup() {
    createCanvas(900, 600);
    jugador = new Jugador(width/2, 550, 60);
    balas = [];
    enemigos = [];
    }

function draw() {
    background(0,0,70);
    jugador.dibujarJugador();

    for (let i = 0; i < balas.length; i++) {
        let b = balas[i];
        b.dibujarBala();
        if(b.posY<0){
            balas.splice(i,1);
        }
    }

    for (let i = 0; i < enemigos.length; i++){
        let e = enemigos[i];
        crearEnemigo(e);
        e.moverEnemigo();
        if(e.posY>height || e.resistencia==0){
            enemigos.splice(i,1);
        }
    }

    for (let i = 0; i < enemigos.length; i++){
        for (let j = 0; j < balas.length; j++){
        let e = enemigos[i];
        let b = balas[j];
        if(dist(e.posX,e.posY,b.posX,b.posY)<50){
            e.resistencia-=1;
            balas.splice(j,1);
            }
        }
    }

    if(frameCount%180==0){
        enemigos.push(new Normal(50, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(150, 0, 50, 50, 255, 255, 0, 1, 0.5))
        enemigos.push(new Normal(250, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(350, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(450, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(550, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(650, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(750, 0, 50, 50, 255, 255, 0, 1, 0.5));
        enemigos.push(new Normal(850, 0, 50, 50, 255, 255, 0, 1, 0.5));
        }

        if(frameCount%240==0){
            let pos = Math.floor(random(1,10));
            enemigos.push(new Rapido(50*pos, -50, 50, 100, 255, 0, 0, 2, 3));
            
        }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW && jugador.posX < width-jugador.tam) {
        jugador.posX += 50;
    }

    if (keyCode == LEFT_ARROW && jugador.posX > 0+jugador.tam) {
        jugador.posX -= 50;
    }
    
    if(keyCode==32){
        balas.push(new Bala(jugador.posX,jugador.posY,20, -60));  
    }
}

function crearEnemigo(e){
    if(e instanceof Normal){
        fill(e.r, e.g, e.b);
        ellipse(e.posX, e.posY, e.ancho, e.alto);
    }

    if(e instanceof Rapido){
        rectMode(CENTER);
        fill(e.r, e.g, e.b);
        rect(e.posX, e.posY, e.ancho, e.alto);
        }
    }
