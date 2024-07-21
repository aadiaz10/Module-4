document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('light-mode');
});
