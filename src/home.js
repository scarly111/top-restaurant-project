export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Pizza Paradise!";

    const description = document.createElement('p');
    description.textContent = "Delicious stone-fired pizza made with love.";

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    content.appendChild(homeDiv);
}
