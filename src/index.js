import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
    document.getElementById('content').textContent = '';
}

document.getElementById('homeBtn').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menuBtn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('contactBtn').addEventListener('click', () => {
    clearContent();
    loadContact();
});

// Load homepage by default
loadHome();
