const $nombre = document.querySelector(".nombre");
const $descripcion = document.querySelector(".descripcion");
const $calificacion = document.querySelector(".cantidad");
const $imagen = document.querySelector(".imagen");
const $tipo = document.querySelector(".tipo1");
const $estado = document.querySelector(".estado1");

const $form = document.querySelector(".contenidoForm");
const $tarjetas = document.querySelector(".tarjetas");
const $error = document.querySelector(".error");
const $contador = document.querySelector(".contador");

let contador = 0;

$form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (
        $nombre.value === "" ||
        $descripcion.value === "" ||
        $calificacion.value === "" ||
        $imagen.value === ""
    ) {
        $error.textContent = "Complete todos los campos";
        return;
    }

    if (
        $calificacion.value < 1 ||
        $calificacion.value > 5
    ) {
        $error.textContent =
            "La calificación debe estar entre 1 y 5";
        return;
    }

    $error.textContent = "";

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("card");

    tarjeta.dataset.tipo = $tipo.value;
    tarjeta.dataset.estado = $estado.value;

    tarjeta.innerHTML = `
        <img src="${$imagen.value}" width="200">

        <h3 class="tituloTarjeta">
            ${$nombre.value}
        </h3>

        <p>${$descripcion.value}</p>

        <p>Tipo: ${$tipo.value}</p>

        <p class="estadoTexto">
            Estado: ${$estado.value}
        </p>

        <p>
            Calificación: ${$calificacion.value}
        </p>

        <button class="cambiarEstado">
            Cambiar estado
        </button>

        <button class="eliminar">
            Eliminar
        </button>

        <hr>
    `;

    $tarjetas.appendChild(tarjeta);

    contador++;
    $contador.textContent = contador;

   

    const btnEliminar =
        tarjeta.querySelector(".eliminar");

    btnEliminar.addEventListener("click", function() {

        tarjeta.remove();

        contador--;

        $contador.textContent = contador;

    });

    

    const btnEstado =
        tarjeta.querySelector(".cambiarEstado");

    btnEstado.addEventListener("click", function() {

        const estadoTexto =
            tarjeta.querySelector(".estadoTexto");

        if (
            estadoTexto.textContent.includes("Pendiente")
        ) {

            estadoTexto.textContent =
                "Estado: En progreso";

            tarjeta.dataset.estado =
                "En progreso";

        }

        else if (
            estadoTexto.textContent.includes("En progreso")
        ) {

            estadoTexto.textContent =
                "Estado: Terminado";

            tarjeta.dataset.estado =
                "Terminado";

        }

        else {

            estadoTexto.textContent =
                "Estado: Pendiente";

            tarjeta.dataset.estado =
                "Pendiente";

        }

    });


    const titulo =
        tarjeta.querySelector(".tituloTarjeta");

    titulo.addEventListener("click", function() {

        titulo.classList.toggle("destacado");

    });

    $form.reset();

});




const modoOscuro =
document.querySelector("#modoOscuro");

modoOscuro.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});



const filtros =
document.querySelectorAll(".filtro");

filtros.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const filtro =
            boton.dataset.filtro;

        const tarjetas =
            document.querySelectorAll(".card");

        tarjetas.forEach(function(tarjeta) {

            if (filtro === "todos") {

                tarjeta.style.display =
                    "block";

            }

            else if (
                tarjeta.dataset.tipo === filtro
            ) {

                tarjeta.style.display =
                    "block";

            }

            else if (
                tarjeta.dataset.estado === filtro
            ) {

                tarjeta.style.display =
                    "block";

            }

            else {

                tarjeta.style.display =
                    "none";

            }

        });

    });

});