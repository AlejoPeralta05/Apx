//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

if (jugadorUno.habilidades.ataque>jugadorDos.habilidades.ataque){
contadorPuntosJug1++;

} else if (jugadorDos.habilidades.ataque>jugadorUno.habilidades.ataque){
contadorPuntosJug2++;

} else {
  contadorPuntosJug1++;
  contadorPuntosJug1++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)

if(jugadorUno.habilidades.velocidad>jugadorDos.habilidades.velocidad){
  contadorPuntosJug1++;

} else if (jugadorDos.habilidades.velocidad>jugadorUno.habilidades.velocidad){
  contadorPuntosJug2++;

} else {
  contadorPuntosJug1++;
  contadorPuntosJug1++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)

if(jugadorUno.habilidades.vida>jugadorDos.habilidades.vida){
  contadorPuntosJug1++;

} else if (jugadorDos.habilidades.velocidad>jugadorUno.habilidades.vida){
  contadorPuntosJug2++;

} else {
  contadorPuntosJug1++;
  contadorPuntosJug1++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)

if(jugadorUno.habilidades.velocidad>jugadorDos.habilidades.magia){
  contadorPuntosJug1++;

} else if (jugadorDos.habilidades.velocidad>jugadorUno.habilidades.magia){
  contadorPuntosJug2++;

} else {
  contadorPuntosJug1++;
  contadorPuntosJug1++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)

const auxJugadorUNo = jugadorUno.articulos.length;
const auxJugadorDos= jugadorDos.articulos.length;

if(auxJugadorUNo>auxJugadorDos){
    contadorPuntosJug1++;

} else if(auxJugadorDos>jugadorUno){
    contadorPuntosJug2++;

  }else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

if (contadorPuntosJug1 > contadorPuntosJug2){
  nombreGanador = jugadorUno.nombre;
} else if (contadorPuntosJug2 > contadorPuntosJug1){
  nombreGanador = jugadorDos.nombre;
} else {
  nombreGanador = "Empate";
}

var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: nombreGanador,
}

console.log(resultado)

//-----------------------------------------------------------------------//