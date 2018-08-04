
var Tablero = function(cantidadPiezas){
    this.cantidadPiezas = cantidadPiezas;
    this.grilla =[[]];
    this.imagen = '';
    //se instancian los atributos que indican la posicion de las fila y columna vacias de acuerdo a la cantidad de piezas por lado para que sea la ultima del tablero
    this.filaPosicionVacia = this.cantidadPiezas - 1;
    this.columnaPosicionVacia = this.cantidadPiezas - 1;
}
Tablero.prototype.crearGrilla = function(){
    //Creo el array
    console.log(this);
    for (var index = 1; index < this.cantidadPiezas; index++) {
        this.grilla.push([]);
    }
    //Recorro el array y le agrego los numeros.
    var ultimoValor = 1;
    for (var i = 0; i < this.grilla.length; i++) {
        for (var j = 0; j < this.grilla.length; j++) {
            this.grilla[i].push(ultimoValor++);
        }
    }
}
Tablero.prototype.posicionValida = function(fila, columna) {
    if ((fila >= 0 && fila <= this.cantidadPiezas-1) && (columna >= 0 && columna <= this.cantidadPiezas-1)) {
        return true;
    }
    else {
        return false;
    }

}
Tablero.prototype.cargarImagen = function (e) {
    //se calcula el ancho y el alto de las piezas de acuerdo al tamaño del canvas (600). 
    this.anchoPiezas = Math.floor(600 / this.cantidadDePiezasPorLado);
    this.altoPiezas = Math.floor(600 / this.cantidadDePiezasPorLado);
    //se calcula el ancho y alto del rompecabezas de acuerdo al ancho y alto de cada pieza y la cantidad de piezas por lado
    this.anchoDeRompecabezas = this.anchoPiezas * this.cantidadDePiezasPorLado;
    this.altoDeRompecabezas = this.altoPiezas * this.cantidadDePiezasPorLado;
    this.configurarCanvas();
}
Tablero.prototype.iniciarImagen = function (callback) {
    this.imagen = new Image();
    var self = this;
    //se espera a que se termine de cargar la imagen antes de ejecutar la siguiente funcion
    this.imagen.addEventListener('load', function () {
        self.cargarImagen.call(self);
        callback();
    }, false);
    this.imagen.src = "images/final.png";
}