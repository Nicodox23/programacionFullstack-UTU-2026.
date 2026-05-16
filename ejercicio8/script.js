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


 