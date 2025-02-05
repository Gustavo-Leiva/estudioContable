document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            // Obtener la respuesta y la flecha
            const answer = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');
            
            // Buscar todas las respuestas abiertas
            const allAnswers = document.querySelectorAll('.faq-answer');
            const allButtons = document.querySelectorAll('.faq-question');

            // Cerrar todas las respuestas
            allAnswers.forEach(a => {
                if (a !== answer) {
                    a.style.display = 'none';
                }
            });

            // Remover la clase activa de todos los botones
            allButtons.forEach(b => b.classList.remove('active'));

            // Si la respuesta no está abierta, abrirla
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                button.classList.add('active');
            } else {
                answer.style.display = 'none';
                button.classList.remove('active');
            }
        });
    });
});
