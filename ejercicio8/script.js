alert("Hola Mundo");

let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre);

let num1 = parseInt(prompt("Ingrese el primer número"), 10);
let num2 = parseInt(prompt("Ingrese el segundo número"), 10);
let suma = num1 + num2;

alert("La suma de " + num1 + " y " + num2 + " es: " + suma);

let edad = parseInt(prompt("Ingrese su edad"), 10);

if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

let num = parseInt(prompt("Ingrese un número"), 10);

if (num % 2 === 0) {
    alert(num + " es un número par");
} else {
    alert(num + " es un número impar");
}

let nota = parseInt(prompt("Ingrese una nota del 1 al 10"), 10);

if (nota < 5) {
    alert(nota + " insuficiente");
} else if (nota >= 5 && nota <= 7) {
    alert(nota + " aceptable");
} else if (nota > 7 && nota <= 10) {
    alert(nota + " muy bien");
}

for (let i = 1; i <= 10; i++) {
    alert("Contador: " + i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        alert("Número par: " + i);
    }
}

let contraseña = prompt("Ingrese la contraseña");

if (contraseña !== "1234") {
    alert("Contraseña incorrecta");
} else {
    alert("Contraseña correcta");
}

{
    let sumaTotal = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingresa un número (0 para terminar)"), 10);
        sumaTotal += numero;
    } while (numero !== 0);

    alert("La suma total es: " + sumaTotal);
}

let calculadora = prompt("Ingrese la operación (suma, resta, multiplicacion, division)");
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let resultado;

switch (calculadora) {
    case "suma":
        resultado = numero1 + numero2;
        break;

    case "resta":
        resultado = numero1 - numero2;
        break;

    case "multiplicacion":
        resultado = numero1 * numero2;
        break;

    case "division":
        resultado = numero1 / numero2;
        break;

    default:
        alert("Operación no válida");
}

if (resultado !== undefined) {
    alert("El resultado es: " + resultado);
}

let opcion = prompt("Selecciona una opción: 1) Saludar 2) Mostrar fecha 3) Número aleatorio");

switch (opcion) {
    case "1":
        alert("Hola ¿Cómo estás?");
        break;

    case "2":
        alert("La fecha es: " + new Date().toLocaleDateString());
        break;

    case "3":
        alert("Número aleatorio: " + (Math.floor(Math.random() * 100) + 1));
        break;

    default:
        alert("Opción no válida");
}

let numeroRandom = Math.floor(Math.random() * 10) + 1;
let adivina = parseInt(prompt("Adivina el número entre 1 y 10"), 10);

while (adivina !== numeroRandom) {
    alert("Le erraste");
    adivina = parseInt(prompt("Intenta de nuevo"), 10);
}

alert("¡Adivinaste el número!");

let contador = 0;
let numero = 1;

while (numero !== 0) {
    numero = parseInt(prompt("Ingrese un número (0 para terminar)"), 10);

    if (numero % 2 === 0 && numero !== 0) {
        contador++;
    }
}

alert("Cantidad de números pares: " + contador);

let nombres = ["Nicolas", "Ariana", "Lucas", "Thiago", "Emanuel"];

for (let i = 0; i < nombres.length; i++) {
    alert("Nombre " + (i + 1) + ": " + nombres[i]);
}

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

alert("Mayor: " + mayor);
alert("Menor: " + menor);

const notas = [7, 8, 9, 10, 6];

let sumaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}

let promedio = sumaNotas / notas.length;

alert("El promedio es: " + promedio);

{
    const nombres2 = [];
    let nombreIngresado = prompt("Ingrese un nombre (o escriba 'salir')");

    while (nombreIngresado.toLowerCase() !== "salir") {
        nombres2.push(nombreIngresado);

        nombreIngresado = prompt("Ingrese otro nombre (o escriba 'salir')");
    }

    console.log(nombres2);
}

const frutas = ["Mandarina", "Tomate", "Limón", "Sandía", "Melón"];

console.log("El array tiene", frutas.length, "elementos");

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 === 0) {
        console.log(numeros3[i]);
    }
}

const frutas2 = ["Mandarina", "Tomate", "Limón", "Sandía", "Melón"];

const existe = frutas2.includes("Limón");

if (existe) {
    alert("La fruta existe en el array");
} else {
    alert("La fruta no existe en el array");
}

const frutas3 = ["Mandarina", "Tomate", "Limón", "Sandía", "Melón"];

const eliminado = frutas3.pop();

alert("Fruta eliminada: " + eliminado);

const frutas4 = ["Mandarina", "Tomate", "Limón"];

frutas4.push("Naranja");

alert("Fruta agregada: Naranja");
console.log(frutas4);