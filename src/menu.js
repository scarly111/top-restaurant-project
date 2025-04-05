export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');

    const items = ["Pepperoni Pizza", "Margherita", "BBQ Chicken"];
    items.forEach(item => {
        const dish = document.createElement('p');
        dish.textContent = item;
        menuDiv.appendChild(dish);
    });

    content.appendChild(menuDiv);
}
