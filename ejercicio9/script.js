

let botonTitulo = document.querySelector("#boton-titulo");

botonTitulo.addEventListener("click", cambiarTexto);

function cambiarTexto() {
     document.getElementById("ejercicio10pe").textContent = "el titlo cambio";
}

function cambiarTexto2W() {
     document.getElementById("HOLAAAAAAAA").textContent = "Adios:c";
}   

function cambiarTexto3() {  
     document.querySelector("img").src = "https://wallpapers4screen.com/Uploads/26-7-2022/42489/thumb-massey-ferguson-8737-s-tractor-front-view-exterior-8737-s-black-edition.jpg";
}
function mostrarResultado() {
let texto = document.getElementById("mensaje").value;
  alert(document.getElementById("resultado").textContent = "El resultado es: " + texto);     

}

function cambiarEstilo() {
     const elemento = document.querySelector(".texto");
     console.log(elemento);
     elemento.classList.add("resaltado");
}

function cambiarEstilos()  {
    const elemento = document.querySelector(".texto2");
    elemento.classList.remove("texto2");
}
function cambiarFondo() {
     const elemento = document.querySelector("body");
    elemento.classList.toggle("cambiarFondo");

}
{
function agregarelemento() {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "Nuevo elemento agregao";
    document.body.appendChild(nuevoElemento);

}
}function crearelemento() {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "Nuevo elemento creado";
    document.body.appendChild(nuevoElemento);
}
