// Nuevo
var Juego = {
  cantidadDePiezasPorLado: 0,
  tablero:[],
  crearTablero: function (){
    this.tablero = new Tablero(this.cantidadDePiezasPorLado);
    this.tablero.crearGrilla();
  },
  moverPieza: function (fila, columna) {
    return this.tablero.posicionValida(fila, columna);
  }
}
