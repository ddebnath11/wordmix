function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function submitForm() {
    const author = document.querySelector('input[name="author"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    // Create a poem object
    const poem = {
        id: generateRandomId(8),
        title: title,
        content: content,
    };

    // Save the poem to local storage
    savePoem(poem);

    // Clear form fields
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('textarea[name="content"]').value = '';

    // Display submitted poems
    displayPoems();
}

// Function to save poem to local storage
function savePoem(poem) {
    const poems = JSON.parse(localStorage.getItem('poems')) || [];
    poems.push(poem);
    localStorage.setItem('poems', JSON.stringify(poems));
}

// Function to display submitted poems
function displayPoems() {
    const poemsContainer = document.getElementById('poemsContainer');
    poemsContainer.innerHTML = ''; // Clear existing content

    const poems = JSON.parse(localStorage.getItem('poems')) || [];

    poems.forEach(poem => {
        const poemElement = document.createElement('div');
        poemElement.innerHTML = `<h2>${poem.title}</h2><p>${poem.content}</p>`;
        poemsContainer.appendChild(poemElement);
    });
}

// Fetch and display submitted poems when the page loads
window.onload = function () {
    displayPoems();
};
