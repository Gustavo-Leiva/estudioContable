document.addEventListener("DOMContentLoaded", function () {
    // Cargar artículos desde el JSON
    fetch("./js/articulos.json")

        .then(response => response.json())
        .then(data => {
            const contenedor = document.querySelector(".blog-container");

            // Iterar sobre los artículos y crear una tarjeta para cada uno
            data.forEach(articulo => {
                const card = document.createElement("div");
                card.classList.add("blog-card");

                // Construcción del contenido del artículo
                let contenidoHTML = "";
                articulo.contenido.forEach(bloque => {
                    if (bloque.tipo === "texto") {
                        contenidoHTML += `<p>${bloque.valor}</p>`;
                    } else if (bloque.tipo === "imagen") {
                        contenidoHTML += `<img src="img/publicaciones/${bloque.valor}" alt="${bloque.descripcion}" style="max-width: 100%;">`

                    }
                });

                // Crear el HTML de la tarjeta
                card.innerHTML = `
                    <p class="date">${articulo.fecha}</p>
                    <h2>${articulo.titulo}</h2>
                    <p class="summary">${articulo.resumen}</p>
                    <div class="full-content" style="display: none;">${contenidoHTML}</div>
                    <button class="read-more">Leer más</button>
                `;

                // Añadir la tarjeta al contenedor
                contenedor.appendChild(card);
            });

            // Llamar a la función para activar los botones después de agregar los artículos
            inicializarBotones();
        })
        .catch(error => console.error("Error cargando los artículos:", error));

    // Función para manejar los botones "Leer más"
    function inicializarBotones() {
        const readMoreButtons = document.querySelectorAll(".read-more");

        // Recorrer cada botón y agregar un evento de clic
        readMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                const card = this.closest(".blog-card");
                const fullContent = card.querySelector(".full-content");
                const isActive = fullContent.style.display === "block";

                // Cerrar todos los contenidos antes de abrir el nuevo
                document.querySelectorAll(".full-content").forEach(content => content.style.display = "none");
                document.querySelectorAll(".read-more").forEach(btn => btn.textContent = "Leer más");

                // Si no estaba abierta, abrirla
                if (!isActive) {
                    fullContent.style.display = "block";
                    this.textContent = "Leer menos";
                }
            });
        });
    }
});
