// Clases (Molde del objeto) 
// La clase siempre debe llamarse igual que el fichero y que empiece con mayuscula.

// Interface
interface CamisetaBase {
  setColor(color: string): void;
  getColor(): string;
}


// Clase Camiseta
class Camiseta implements CamisetaBase {
  // Propiedades (Caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  // Métodos (Funciones o acciones del objeto)
  constructor (color: string, modelo: string, marca: string, talla: string, precio: number) { 
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  
  public setColor (color: string) {
    this.color = color;
  }
  public getColor () {
    return this.color
  }
  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setTalla(talla: string): void {
    this.talla = talla;
  }

  public getTalla(): string {
    return this.talla;
  }

  public setPrecio(precio: number): void {
    this.precio = precio;
  }

  public getPrecio(): number {
    return this.precio;
  }
}


// Clase Hija
class Sudadera extends Camiseta {
  public capucha: boolean;

  setCapucha (capucha: boolean) {
    this.capucha = capucha;
  }
  getCapucha(): boolean {
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
console.log(sudadera_nike)




