// app2.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar artículos desde el JSON
    fetch("../js/articulos.json")
        .then(response => response.json())
        .then(data => {
            const contenedor = document.querySelector(".blog-container");

            data.forEach(articulo => {
                const card = document.createElement("div");
                card.classList.add("blog-card");

                card.innerHTML = `
                    <h2>${articulo.titulo}</h2>
                    <p class="summary">${articulo.resumen}</p>
                    <p class="full-content" style="display: none;">${articulo.contenido}</p>
                    <button class="read-more">Leer más</button>
                    <p class="date">${articulo.fecha}</p>
                `;

                contenedor.appendChild(card);
            });

            // Llamar a la función para activar los botones después de agregar los artículos
            inicializarBotones();
        })
        .catch(error => console.error("Error cargando los artículos:", error));
});
