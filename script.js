const passwordForm = document.getElementById('password-form');
const passwordsList = document.getElementById('passwords-list');

passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const website = document.getElementById('website').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!website || !username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    const passwordItem = document.createElement('div');
    passwordItem.classList.add('password-item');
    passwordItem.innerHTML = `
        <p><strong>Website/Service:</strong> ${website}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <button class="delete-btn">Delete</button>
    `;
    passwordsList.appendChild(passwordItem);

    passwordForm.reset();
});

passwordsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const passwordItem = event.target.parentElement;
        passwordsList.removeChild(passwordItem);
    }
});
