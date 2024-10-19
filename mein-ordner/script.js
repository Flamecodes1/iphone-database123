// Anmeldeformular ein- und ausblenden
function toggleLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = loginPopup.style.display === 'none' ? 'block' : 'none';
    document.getElementById('register-popup').style.display = 'none';
}

// Registrierungsformular ein- und ausblenden
function toggleRegisterPopup() {
    const registerPopup = document.getElementById('register-popup');
    registerPopup.style.display = registerPopup.style.display === 'none' ? 'block' : 'none';
    document.getElementById('login-popup').style.display = 'none';
}

// Registrierung
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Speichern der Registrierungsdaten im Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrierung erfolgreich! Sie können sich nun anmelden.');
    document.getElementById('register-popup').style.display = 'none';
});

// Anmeldung
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Überprüfen der gespeicherten Daten
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Anmeldung erfolgreich!');
        document.getElementById('login-popup').style.display = 'none';
    } else {
        alert('Falscher Benutzername oder Passwort.');
    }
});
