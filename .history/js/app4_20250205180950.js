// Script para cambiar el modo oscuro/claro
document.getElementById("mode-toggle").addEventListener("click", function() {
    // Alternar clase 'dark-mode' en el body
    document.body.classList.toggle("dark-mode");
  
    // Cambiar el icono entre sol y luna
    const icon = document.querySelector("#mode-toggle i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
  