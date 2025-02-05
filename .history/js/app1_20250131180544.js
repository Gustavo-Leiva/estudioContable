document.addEventListener("DOMContentLoaded", function () {
    // Cargar artículos desde el archivo JSON
    fetch("../js/articulos.json")
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(data => {
            const contenedor = document.querySelector(".blog-container");  // Contenedor donde se mostrarán las tarjetas

            // Iterar sobre los artículos y crear una tarjeta para cada uno
            data.forEach(articulo => {
                const card = document.createElement("div");  // Crear un nuevo contenedor para cada artículo
                card.classList.add("blog-card");  // Añadir clase de estilo a la tarjeta

                // Insertar el contenido de cada artículo dentro de la tarjeta
                card.innerHTML = `
                    <h2>${articulo.titulo}</h2>  // Título del artículo
                    <p class="summary">${articulo.resumen}</p>  // Resumen del artículo
                    <p class="full-content" style="display: none;">${articulo.contenido}</p>  // Contenido completo (oculto inicialmente)
                    <button class="read-more">Leer más</button>  // Botón para mostrar/ocultar el contenido
                    <p class="date">${articulo.fecha}</p>  // Fecha de publicación
                `;

                contenedor.appendChild(card);  // Añadir la tarjeta al contenedor de artículos
            });

            // Llamar a la función para activar los botones "Leer más"
            inicializarBotones();
        })
        .catch(error => console.error("Error cargando los artículos:", error));  // Manejo de errores

        function inicializarBotones() {
            const botones = document.querySelectorAll('.read-more');
            
            botones.forEach(button => {
                button.addEventListener('click', function() {
                    const contenido = this.previousElementSibling;  // Obtener el contenido completo
                    if (contenido.style.display === "none") {
                        contenido.style.display = "block";  // Mostrar contenido
                        this.textContent = "Leer menos";  // Cambiar el texto del botón
                    } else {
                        contenido.style.display = "none";  // Ocultar contenido
                        this.textContent = "Leer más";  // Cambiar el texto del botón
                    }
                });
            });
        }
        

});
