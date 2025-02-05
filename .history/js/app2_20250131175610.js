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
