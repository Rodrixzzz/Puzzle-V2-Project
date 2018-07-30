
var Tablero = function(cantidadPiezas){
    this.cantidadPiezas = cantidadPiezas;
    this.grilla =[[]];
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