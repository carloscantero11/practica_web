// String
let cadena: string = "Hola Mundo";
console.log(cadena);

// Number
let numero: number = 11;
console.log(numero);

// Boolean
let verdadero_falso: boolean = true;
console.log(verdadero_falso);

// Any
let cualquiera: any = "Hola";
cualquiera = 777;
console.log(cualquiera);

// Arrays
var lenguajes: Array<string> = ["PHP", "Java", "Python"];
var edades: number[] = [21, 22, 26];
var otros: Array<any> = [1, "Dos", 3, "Cuatro"];

console.log(lenguajes);
console.log(edades);
console.log(otros);

// Multiples Tipos de Datos
let prueba: string | number = "Soy un String";
console.log(prueba);
prueba = 10;
console.log(prueba);

// Datos Personalizados
type alfanumerico  = string | number;

let palabraONumero: alfanumerico = "Palabra";
console.log(palabraONumero);
palabraONumero = 1;
console.log(palabraONumero)

