document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');
            
            // Toggle visibility of the answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            
            // Toggle the active class for the arrow
            button.classList.toggle('active');
        });
    });
});
