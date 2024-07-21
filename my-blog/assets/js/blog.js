document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        const postAuthor = document.createElement('p');
        postAuthor.textContent = `Author: ${post.username}`;
        postElement.appendChild(postAuthor);

        postsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', renderPosts);
