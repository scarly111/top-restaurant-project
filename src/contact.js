export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');

    const phone = document.createElement('p');
    phone.textContent = "Phone: 123-456-7890";

    const email = document.createElement('p');
    email.textContent = "Email: contact@pizzaparadise.com";

    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    content.appendChild(contactDiv);
}
