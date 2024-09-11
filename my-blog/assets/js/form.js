document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        alert('Please complete the form.');
        return;
    }

    const post = { username, title, content };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'blog.html';
});
