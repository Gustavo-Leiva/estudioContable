/* ================================================================
🎯 app6.js) Revelado de Secciones al Desplazarse (Scroll)
===================================================================
💼 **Propósito:**
- Este script permite que las secciones de una página web se revelen de manera suave cuando el usuario se desplaza hacia ellas. Se utiliza la API de **Intersection Observer** para detectar cuándo una sección entra en el área visible del navegador y, en ese momento, se aplica un estilo de revelado (por ejemplo, una transición o animación).
- El efecto de revelar se activa solo una vez cuando una sección es visible en el viewport.

⚙️ **Comportamiento:**
- Las secciones con la clase `.hidden-section` se mantienen ocultas inicialmente.
- Cuando al menos el **20%** de la sección entra en el área visible del navegador, se aplica la clase `.show` para hacerla visible.
- Una vez que la sección es visible, el observador deja de rastrear la sección para evitar que se vuelva a activar el efecto.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
1) Observador de Intersección para Revelar Secciones
==================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Deja de observar una vez mostrado
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    });

    sections.forEach(section => observer.observe(section));
});
