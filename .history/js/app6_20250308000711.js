
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
