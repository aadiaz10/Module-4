document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        document.getElementById('form-message').textContent = 'Please complete all fields.';
        return;
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
