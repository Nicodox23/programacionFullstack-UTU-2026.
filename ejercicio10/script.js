 const formulario = document.getElementById("formulario");
    const tituloInput = document.getElementById("titulo");
    const urlInput = document.getElementById("url");
    const galeria = document.getElementById("galeria");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault();

      const titulo = tituloInput.value;
      const url = urlInput.value;


      if (titulo === "" || url === "") {
        mensajeError.textContent = "Todos los campos son obligatorios";
        return;
      }

      mensajeError.textContent = "";

     
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      const imagen = document.createElement("img");
      imagen.src = url;

      const texto = document.createElement("h3");
      texto.textContent = titulo;

      tarjeta.appendChild(imagen);
      tarjeta.appendChild(texto);

      galeria.appendChild(tarjeta);

      
      tituloInput.value = "";
      urlInput.value = "";
    });