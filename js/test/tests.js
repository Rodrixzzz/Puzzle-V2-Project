var expect = chai.expect;

describe('Creación', function () {
  'use strict';

  describe('Juego', function () {
    it('El Objeto Juego está definido', function (done) {
      if (!window.Juego) {
        done(err);
      }
      else {
        done();
      }
    });
  });

  describe('Tamaño de la grilla', function () {
    it('La grilla tiene el tamaño correcto', function () {
      //se crea la grilla con un valor de cantidad de piezas por lado
      Juego.cantidadDePiezasPorLado = 5;
      Juego.crearTablero();
      //se evalua si el tamaño de la grilla creada es correcto
      // expect(Juego.grilla.length).to.equal(Juego.cantidadDePiezasPorLado);
      // expect(Juego.grilla[0].length).to.equal(Juego.cantidadDePiezasPorLado);
      expect(Juego.tablero.grilla.length).to.equal(Juego.cantidadDePiezasPorLado);
      expect(Juego.tablero.grilla.length).to.equal(Juego.cantidadDePiezasPorLado);
    });
  });
  describe('Verifico movimiento Valido', function () {
    it('El movimiento es correcto(Fila=0,Columna=3)', function () {
      //se evalua si el tamaño de la grilla creada es correcto
      expect(Juego.moverPieza(0,3)).to.be.true;
    });
    it('El movimiento es invalido(Fila=0,Columna=8)', function () {
      //se evalua si el tamaño de la grilla creada es correcto
      expect(Juego.moverPieza(0,8)).to.be.false;
    });
  });
});
