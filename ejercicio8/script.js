alert("Hola Mundo");

var name = prompt("¿Cuál es tu nombre?");
alert("Hola " + name);

var num1 = parseInt(prompt("Ingrese el primer número"), 10);
var num2 = parseInt(prompt("Ingrese el segundo número"), 10);
var suma = num1 + num2;
alert("La suma de " + num1 + " y " + num2 + " es: " + suma);

var edad = parseInt(prompt("Ingrese su edad"), 10);
if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

var num = parseInt(prompt("Ingrese un número"), 10);
if (num % 2 === 0) {
    alert(num + " es un numero par");
} else {
    alert(num + " es un numero impar");
}

var num = parseInt(prompt("Ingrese un número"), 10);

if (num < 5) {
    alert(num + " insuficiente ");
} else if (num >= 5 && num <= 7) {
    alert(num + " Aceptable ");
} else if (num > 7 && num <= 10) {
    alert(num + " muy bien ");
}

for (var i = 1; i <= 10; i++) {
    alert("Contador: " + i);
}
for (var left = 1; left <= 20; left++) {
    if (left % 2 === 0) {
        alert("Contador: " + left);
    }
}
var contraseña = prompt("Ingrese la contraseña");
if (contraseña !== "1234") {
    alert("Contraseña incorrecta");
} else {
    alert("Contraseña correcta");
}
{
let suma = 0;
let numero;

do {
  numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
  suma += numero;
} while (numero !== 0);

alert("La suma total es: " + suma);
}
var calculdora = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división)");
var num1 = parseFloat(prompt("Ingrese el primer número"));
var num2 = parseFloat(prompt("Ingrese el segundo número"));
var resultado;  
switch (calculdora) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break;
    case "multiplicación":
        resultado = num1 * num2;
        break;
    case "división":
        resultado = num1 / num2;
        break;
    default:
        alert("Operación no válida");
}
if (resultado !== undefined) {
    alert("El resultado de la " + calculdora + " es: " + resultado);
}

let opcion = prompt("Selecciona una opción: 1) Saludar, 2) Mostrar fecha, 3) Número aleatorio");
switch (opcion) {
    case "1":
        alert("Hola ¿Cómo estás?");
        break;
    case "2":
        alert("La fecha es: " + new Date().toLocaleDateString());
        break;
    case "3":
        alert("El número aleatorio es: " + Math.floor(Math.random() * 100) + 1);
        break;
    default:
        alert("Opción no válida");
}
let numerorandom = Math.floor(Math.random() * 10) + 1;
let adivina = parseInt(prompt("Adivina el número entre 1 y 10"), 10);
if (adivina === numerorandom) {
    alert("Adivinaste el número.");
} else {
    alert("Le errsate: ");
    while (adivina !== numerorandom) {
        adivina = parseInt(prompt("Intenta de nuevo"), 10);
 }
}

let contador = 0;
let numero = 1;   

while (numero != 0) {
      numero = parseInt(prompt("Ingrese un número (0 para terminar)"), 10);
      if (numero % 2 === 0 && numero !=0) {
            contador++;
      } 
}
alert("La cantidad de números pares ingresados es: " + contador);

let nombres = ["Nicolas", "Ariana", "Lucas", "Thiago", "Emanuel"];
     console.log("Lista de nombres:", nombres);
     for (let i = 0; i < nombres.length; i++) {
     alert("Nombre " + (i + 1) + ": " + nombres[i]);
}

//ejercico17 

const numeros = [5, 10, 15, 20, 25];
for (let i = 0; i < numeros.length; i++) {
    alert("Número " + (i + 1) + ": " + numeros[i]);
}

const numeros2 = [2, 5, 9, 98, 13];
let mayor = numeros2[0];
let menor = numeros2[0];

for (let i = 1; i < numeros2.length; i++) {
    if (numeros2[i] > mayor) {
        mayor = numeros2[i];
    }
    if (numeros2[i] < menor) {
        menor = numeros2[i];
    }
}
alert(" Mayor: " + mayor);
alert(" Menor: " + menor);

