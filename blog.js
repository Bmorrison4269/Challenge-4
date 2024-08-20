document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${post.username}</p>
                <p>${post.content}</p>
            `;

            postsContainer.appendChild(postElement);
        });
    }

    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const toggleThemeBtn = document.getElementById('toggle-theme');
    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

