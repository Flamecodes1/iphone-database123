document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Anmeldung erfolgreich!');
        window.location.href = 'main.html';
    } else {
        alert('Falscher Benutzername oder Passwort.');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrierung erfolgreich! Sie können sich nun anmelden.');
    toggleRegisterPopup();
});

function toggleRegisterPopup() {
    const registerPopup = document.getElementById('register-popup');
    registerPopup.style.display = registerPopup.style.display === 'none' ? 'block' : 'none';
    document.getElementById('login-container').style.display = 'none';
}
// Event Listener für das Registrierungsformular
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Speichere den Benutzernamen und das Passwort im localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrierung erfolgreich! Sie können sich nun anmelden.');

    // Registrierungs-Popup ausblenden
    toggleRegisterPopup();

    // Login-Formular anzeigen
    document.getElementById('login-container').style.display = 'block';

    // Optional: Leere die Eingabefelder
    document.getElementById('register-form').reset();
});
// Event Listener für das Registrierungsformular
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Speichere den Benutzernamen und das Passwort im localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrierung erfolgreich! Sie können sich nun anmelden.');

    // Registrierungs-Popup ausblenden
    toggleRegisterPopup();

    // Login-Formular anzeigen
    document.getElementById('login-container').style.display = 'flex';

    // Eingabefelder im Registrierungsformular zurücksetzen
    document.getElementById('register-form').reset();
});

// Funktion zum Umschalten des Registrierungs-Popups
function toggleRegisterPopup() {
    const registerPopup = document.getElementById('register-popup');
    const loginContainer = document.getElementById('login-container');

    if (registerPopup.style.display === 'flex') {
        // Registrierungs-Popup ausblenden
        registerPopup.style.display = 'none';
        // Login-Container anzeigen
        loginContainer.style.display = 'flex';
    } else {
        // Registrierungs-Popup anzeigen
        registerPopup.style.display = 'flex';
        // Login-Container ausblenden
        loginContainer.style.display = 'none';
    }
}

// Event Listener für das Login-Formular (falls noch nicht vorhanden)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Anmeldung erfolgreich!');
        window.location.href = 'main.html'; // Leitet zur Hauptseite weiter
    } else {
        alert('Falscher Benutzername oder Passwort.');
    }
});

