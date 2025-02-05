// loadFooter.js
document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el footer.");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error("Error cargando el footer:", error);
            });
    }
});
