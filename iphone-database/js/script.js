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

// Event Listener für das Registrierungsformular
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    // Überprüfen, ob die Felder leer sind
    if (username === '' || password === '') {
        alert('Bitte füllen Sie beide Felder aus.');
        return;
    }

    // Benutzerdaten im localStorage speichern
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registrierung erfolgreich! Sie können sich nun anmelden.');

    // Registrierungspopup ausblenden und Login-Formular anzeigen
    toggleRegisterPopup();
    document.getElementById('login-container').style.display = 'block';

    // Formular zurücksetzen
    document.getElementById('register-form').reset();
});

// Event Listener für das Login-Formular
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Benutzerdaten aus localStorage abrufen
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Überprüfen, ob die Eingabedaten mit den gespeicherten Daten übereinstimmen
    if (username === storedUsername && password === storedPassword) {
        alert('Anmeldung erfolgreich!');
        window.location.href = 'main.html'; // Weiterleitung nach erfolgreichem Login
    } else {
        alert('Falscher Benutzername oder Passwort.');
    }
});
