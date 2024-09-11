window.addEventListener('load', function() {
    const postsList = document.getElementById('posts-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    postsList.innerHTML = ''; // Clear any existing content

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Author:</strong> ${post.username}</p>
            <p>${post.content}</p>
        `;
        postsList.appendChild(postElement);
    });
});
