 let idActual;

const api = "https://api.thecatapi.com/v1/images/search";

const imagen = document.querySelector(".gato");
const boton = document.getElementById("traerGato");

const btnMeGusta = document.querySelector(".megusta");
const btnNoMeGusta = document.querySelector(".nomegusta");

const contadorMeGusta = document.querySelector(".contadorMegusta");
const contadorNoMeGusta = document.querySelector(".contadorNomegusta");

const mensaje = document.getElementById("mensaje");

let likes = 0;
let dislikes = 0;

function traerGato() {

    fetch(api, {
        headers: {
            "x-api-key": "live_zivwjF37JZjvpb0d62Y6KCEfA9Gwbw1AatY5KLL9LJC5scVECJxiwAlPvaMObNgB"
        }
    })
    .then(resultado => resultado.json())
    .then(data => {

        idActual = data[0].id;

        console.log("ID:", idActual);

        const url = data[0].url;

        imagen.src = url;

    })
    .catch(error => {
        console.log(error);
    });

}

boton.addEventListener("click", traerGato);

btnMeGusta.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/votes", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "x-api-key": "live_zivwjF37JZjvpb0d62Y6KCEfA9Gwbw1AatY5KLL9LJC5scVECJxiwAlPvaMObNgB"
        },

        body: JSON.stringify({
            image_id: idActual,
            value: 1
        })

    })
    .then(resultado => resultado.json())
    .then(data => {

        likes++;

        contadorMeGusta.textContent = likes;

        mensaje.textContent = "Voto registrado";

        traerGato();

    })
    .catch(error => {
        console.log(error);
    });

});

btnNoMeGusta.addEventListener("click", () => {

    fetch("https://api.thecatapi.com/v1/votes", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "x-api-key": "live_zivwjF37JZjvpb0d62Y6KCEfA9Gwbw1AatY5KLL9LJC5scVECJxiwAlPvaMObNgB"
        },

        body: JSON.stringify({
            image_id: idActual,
            value: -1
        })

    })
    .then(resultado => resultado.json())
    .then(data => {

        dislikes++;

        contadorNoMeGusta.textContent = dislikes;

        mensaje.textContent = "Voto registrado ";

        traerGato();

    })
    .catch(error => {
        console.log(error);
    });

});

traerGato();