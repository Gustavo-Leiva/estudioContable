// leyendas.js
document.addEventListener("DOMContentLoaded", function () {
    let leyendas = ["Servicios Impositivos", "Auditorias", "Servicios Previsionales", "Servicios Contables", "Servicios Financieros"];
    let indiceLeyenda = 0;

    function CambiarLeyenda() {
        document.getElementById("leyenda").textContent = leyendas[indiceLeyenda];
        indiceLeyenda = (indiceLeyenda + 1) % leyendas.length;
    }

    setInterval(CambiarLeyenda, 2500);
});
