/* ================================================================
🎯 app5.js) Interacción con las Preguntas Frecuentes (FAQ)
===================================================================
💼 **Propósito:**
- Este script gestiona la funcionalidad de un **acordeón interactivo** para una sección de **Preguntas Frecuentes (FAQ)** en un sitio web. Permite que las respuestas se desplieguen al hacer clic en la pregunta correspondiente y se oculten al hacer clic nuevamente, proporcionando una experiencia de usuario limpia y eficiente.
- También incluye una animación visual con una **flecha** que rota cuando una respuesta está visible, mejorando la interacción con el usuario.

⚙️ **Comportamiento:**
- Al hacer clic en una pregunta, la respuesta correspondiente se muestra u oculta.
- Si una respuesta está visible y se hace clic en la misma pregunta, la respuesta se oculta.
- Si se hace clic en otra pregunta, se muestra su respuesta y se ocultan las demás.
- Las flechas en los botones de las preguntas se rotan cuando la respuesta se muestra.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
1) Gestión de las Preguntas y Respuestas (FAQ)
==================================================== */

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

