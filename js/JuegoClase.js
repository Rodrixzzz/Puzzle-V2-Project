// Nuevo
var Juego = {
  cantidadDePiezasPorLado: 0,
  tablero: [],
  movimientosTotales = 0,
  contadorDeMovimientos = 0,
  crearTablero: function() {
    this.tablero = new Tablero(this.cantidadDePiezasPorLado);
    this.tablero.crearGrilla();
  },
  moverPieza: function(fila, columna) {
    return this.tablero.posicionValida(fila, columna);
  },
  iniciar: function(cantMovimientos) {
    this.movimientosTotales = cantMovimientos;
    this.contadorDeMovimientos = cantMovimientos;
    this.crearTablero();
    document.getElementById(
      "contadorDeMovimientos"
    ).innerHTML = this.contadorDeMovimientos;
    this.cantidadDePiezasPorLado = document.getElementById(
      "cantidadPiezasPorLado"
    ).value;
    //se guarda el contexto en una variable para que no se pierda cuando se ejecute la funcion iniciarImagen (que va a tener otro contexto interno)
    var self = this;
    //se espera a que este iniciada la imagen antes de construir las piezas y empezar a mezclarlas
    this.tablero.iniciarImagen(function() {
      this.construirPiezas();
      //la cantidad de veces que se mezcla es en funcion a la cantidad de piezas por lado que tenemos, para que sea lo mas razonable posible.
      var cantidadDeMezclas = Math.max(
        Math.pow(this.cantidadPiezas, 3),
        100
      );
      self.mezclarPiezas(cantidadDeMezclas);
    });
  }
};
