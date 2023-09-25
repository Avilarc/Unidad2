"use strict"; //Nos permite trabajar solo con las caracteristicas de ES6

console.log("Esto es un mensaje de la consola");


//variables----------------------------------------------------------------------------------------------------------------------------------------------

let numero = 5;
// var numero = 5; no recomendable
// numero = 5; no recomendable

console.log("El valor de la variable es:" + numero);

//definicion de constantes
const ROJO = "#FF0000";
// const ejemplo; inicializar una constante que se calculara mas adelante, se pone el nombre en minuscula para diferenciar de una constate definida

console.log("el valor en hexadecimal del rojo es: " + ROJO);

//Data types--------------------------------------------------------------------------------------------------------------------------------------------

//Number entero o floats
//special values: Infinity -Infinity NaN(not a number)

let numeroEjemplo = 10;
let numeroDescomunal = 21312312390128398120932n; //añadir n al final para poder tratar numeros grandes

//Texto
//rodeado de comillas dobles o simples

let texto = "Con comillas dobles";
let texto2 = 'Con comillas simples';
let nombre = "Pepe";

console.log(`La comilla invertida nos permite esto: \n ${nombre}`);

//Booleanos

//true o false


//Objetos

let persona = {nombre:"Jose",apellido:"Fernandez"};

console.log(`Su nombre es ${persona.nombre} ${persona.apellido} `);

//Array

let matriz = ["rojo","amarillo","verde"];

console.log(matriz[0]);

//Extra valores

//NULL --> No existe

let nulo = null;

console.log("El valor de la variable es " + nulo);

//Undefined --> No definido

let variable;

console.log(`El valor de la variable es ${variable}`);


//Conversion de datos ------------------------------------------------------------------------------------------------


let experimento = false;

console.log(typeof experimento);

let cadena = 4;

console.log(typeof cadena);

cadena = "hola buenas";

console.log(typeof cadena);

let cadena2 = toString(5);

console.log(typeof cadena2);
console.log("4"/"2");

let a = "2";
let c = Number(a);

console.log(typeof c);

let b1 = Boolean(c);

console.log(b1);

let b2 = Boolean("");

console.log(b2);


//Operaciones con cadenas--------------------------------------------------------------------------------------------

//Concatenar
let saludo = "hola";
let mundo = "Mundo";

console.log(saludo + " " + mundo);

//Operacion con numeros-----------------------------------------------------------------------------------

//Operaciones basicas comunes

//El modulo
let num1 = 14;
let num2 = 3;

console.log(num1%num2);

//La potencia

let num3 = 3;
let num4 = 2;
console.log(num3**num4);

//operadores unarios + y - transforma el valor de negativo a positivo y viceversa