/* ================================================================
🎯 7) Alternancia de Leyendas
===================================================================
💼 **Propósito:**
- Este script cambia el texto de un elemento HTML con el ID `leyenda` cada 2.5 segundos, alternando entre una lista de leyendas predefinidas.
- Se utiliza para mostrar un conjunto de mensajes o categorías de servicios en un área de la página web, creando un efecto de alternancia.

⚙️ **Comportamiento:**
- Un conjunto de leyendas es definido al principio.
- El texto dentro de un elemento con el ID `leyenda` se actualiza cada 2.5 segundos para alternar entre las leyendas definidas en el arreglo `leyendas`.
- Una vez que se llega al final de la lista, el índice se reinicia automáticamente, comenzando desde el primer elemento.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
1) Alternancia de Leyendas en un Elemento HTML
==================================================== */
document.addEventListener("DOMContentLoaded", function () {
    // Definición de las leyendas a alternar
    let leyendas = ["Servicios Impositivos", "Auditorias", "Servicios Previsionales", "Servicios Contables", "Servicios Financieros"];
    let indiceLeyenda = 0;  // Índice para rastrear la leyenda actual

    // Función para cambiar el texto de la leyenda
    function CambiarLeyenda() {
        document.getElementById("leyenda").textContent = leyendas[indiceLeyenda];  // Actualizar el contenido del elemento
        indiceLeyenda = (indiceLeyenda + 1) % leyendas.length;  // Incrementar el índice y asegurarse de que se cicla
    }

    // Ejecutar la función CambiarLeyenda cada 2.5 segundos
    setInterval(CambiarLeyenda, 2500);
});
