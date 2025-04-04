"use strict";
// Clases (Molde del objeto) 
// La clase siempre debe llamarse igual que el fichero y que empiece con mayuscula.
// Clase Camiseta
class Camiseta {
    // Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getMarca() {
        return this.marca;
    }
    setTalla(talla) {
        this.talla = talla;
    }
    getTalla() {
        return this.talla;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getPrecio() {
        return this.precio;
    }
}
// Clase Hija
class Sudadera extends Camiseta {
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
// Objeto Camiseta
var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "M", 15);
console.log(camiseta);
camiseta.setColor("Azul");
console.log(camiseta);
// Objeto Sudadera
var sudadera_nike = new Sudadera("Gris", "Manga Larga", "Nike", "S", 20);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
