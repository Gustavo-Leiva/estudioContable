document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', function () {
            const answer = button.nextElementSibling; // Obtener la respuesta asociada
            const arrow = button.querySelector('.arrow'); // Obtener la flecha

            // Si la respuesta está visible, cerrarla
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                button.classList.remove('active'); // Eliminar la clase 'active' para restaurar la flecha
            } else {
                // Cerrar otras respuestas
                document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    otherAnswer.classList.remove('show');
                });
                document.querySelectorAll('.faq-question').forEach(otherButton => {
                    otherButton.classList.remove('active'); // Eliminar la clase 'active' de otros botones
                });

                // Mostrar la respuesta actual y aplicar la clase 'active' para rotar la flecha
                answer.classList.add('show');
                button.classList.add('active');
            }
        });
    });
});

