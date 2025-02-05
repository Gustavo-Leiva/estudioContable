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

    // Función para manejar los botones "Leer más"
    function inicializarBotones() {
        const readMoreButtons = document.querySelectorAll(".read-more");

        readMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                const card = this.parentElement;
                const fullContent = card.querySelector(".full-content");
                const isActive = fullContent.style.display === "block";

                // Cerrar todas las tarjetas antes de abrir la nueva
                document.querySelectorAll(".full-content").forEach(content => content.style.display = "none");
                document.querySelectorAll(".read-more").forEach(btn => btn.textContent = "Leer más");

                // Si no estaba abierta, la abre
                if (!isActive) {
                    fullContent.style.display = "block";
                    this.textContent = "Leer menos";
                }
            });
        });
    }

    // Manejo del menú de navegación
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const elementMenu = document.querySelectorAll(".nav-list a");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    elementMenu.forEach(element => {
        element.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
    });

    // Cambio automático de leyendas
//     let leyendas = ["Servicios Impositivos", "Auditorias", "Servicios Previsionales", "Servicios Contables", "Servicios Financieros"];
//     let indiceLeyenda = 0;

//     function CambiarLeyenda() {
//         document.getElementById("leyenda").textContent = leyendas[indiceLeyenda];
//         indiceLeyenda = (indiceLeyenda + 1) % leyendas.length;
//     }

//     setInterval(CambiarLeyenda, 2500);
 });





