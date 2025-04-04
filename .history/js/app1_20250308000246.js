/* ================================================================
🎯 app.js Cargar y Mostrar Artículos del Blog desde un JSON
===================================================================
💼 **Propósito:**
- Cargar artículos dinámicamente desde un archivo JSON y mostrarlos en una página web.
- Los artículos se presentan en tarjetas, donde cada tarjeta contiene el contenido del artículo, como texto, imágenes y listas. 
- Permite expandir o contraer el contenido del artículo al hacer clic en el botón "Leer más".

⚙️ **Comportamiento:**
- Los artículos se cargan desde un archivo JSON utilizando `fetch`.
- Cada artículo se presenta en una tarjeta, con un resumen y un botón para mostrar más contenido.
- Los usuarios pueden expandir o colapsar el contenido completo de cada artículo.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
Cargar artículos desde JSON y renderizar en la página
==================================================== */
document.addEventListener("DOMContentLoaded", function () {
    // Cargar artículos desde el JSON
    fetch("../js/articulos.json")
      .then((response) => response.json())
      .then((data) => {
        const contenedor = document.querySelector(".blog-container");
        contenedor.innerHTML = ""; // Limpiar contenido previo
  
        // Iterar sobre los artículos y crear una tarjeta para cada uno
        data.forEach((articulo) => {
          const card = document.createElement("div");
          card.classList.add("blog-card");
  
          // Construcción del contenido del artículo
          let contenidoHTML = "";
          articulo.contenido.forEach((bloque) => {
            if (bloque.tipo === "texto") {
              contenidoHTML += `<p>${bloque.valor.replace(/\n/g, "<br>")}</p>`;
            } else if (bloque.tipo === "imagen") {
              contenidoHTML += `
                <img src="../img/publicaciones/${bloque.valor}" 
                     alt="${bloque.descripcion}" 
                     style="max-width: 100%; display: block; margin: 10px 0;">
              `;
            } else if (bloque.tipo === "lista") {
              contenidoHTML += "<ul>";
              bloque.valor.forEach((item) => {
                if (typeof item === "object" && item.sublista) {
                  // Renderizar sublista
                  contenidoHTML += "<ul class='sublista'>";
                  item.sublista.forEach((subItem) => {
                    contenidoHTML += `<li>${subItem}</li>`;
                  });
                  contenidoHTML += "</ul>";
                } else {
                  contenidoHTML += `<li>${item}</li>`;
                }
              });
              contenidoHTML += "</ul>";
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
      })
      .catch((error) => console.error("Error cargando los artículos:", error));
  
    // Delegación de eventos para manejar los botones "Leer más"
    document.querySelector(".blog-container").addEventListener("click", function (e) {
      if (e.target.classList.contains("read-more")) {
        const card = e.target.closest(".blog-card");
        const fullContent = card.querySelector(".full-content");
        const isActive = fullContent.style.display === "block";
  
        // Cerrar todas las secciones antes de abrir una nueva
        document
          .querySelectorAll(".full-content")
          .forEach((content) => (content.style.display = "none"));
        document
          .querySelectorAll(".read-more")
          .forEach((btn) => (btn.textContent = "Leer más"));
  
        // Si no estaba abierta, abrirla
        if (!isActive) {
          fullContent.style.display = "block";
          e.target.textContent = "Leer menos";
        }
      }
    });
  });
  