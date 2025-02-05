document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las preguntas
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', function () {
            const answer = button.nextElementSibling; // Obtener la respuesta asociada
            const arrow = button.querySelector('.arrow'); // Obtener la flecha

            // Si la respuesta está visible, cerrarla
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                button.classList.remove('active');
            } else {
                // Si la respuesta está oculta, cerramos otras respuestas y rotamos la flecha
                document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    otherAnswer.classList.remove('show');
                });
                document.querySelectorAll('.faq-question').forEach(otherButton => {
                    otherButton.classList.remove('active');
                });

                // Mostrar la respuesta actual y girar la flecha
                answer.classList.add('show');
                button.classList.add('active');
            }
        });
    });
});

