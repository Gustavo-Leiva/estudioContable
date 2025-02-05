
document.addEventListener('DOMContentLoaded', function () {
}document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        // Toggle visibility of the answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
