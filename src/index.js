import loadHome from './home';

function clearContent() {
  document.getElementById('content').textContent = '';
}

document.getElementById('homeBtn').addEventListener('click', () => {
  clearContent();
  loadHome();
});

// Load homepage by default
loadHome();
