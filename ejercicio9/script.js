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
 document.getElementById("resultado").textContent = "El resultado es: " + texto;     

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
    document.body.style.backgroundColor = "black";
}