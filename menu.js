//Create menu page content
export const menu = () => {
    const content = document.querySelector('#content');

    //Create and append menu div
    const food = document.createElement('ul');
    food.innerText = 'Menu';
    content.appendChild(food);

    //Create and append list elements
    const items = [];
    items.push('Pizza', 'Tacos','Burger', 'Fries', 'Coke')
    for (let i = 0; i < items.length; i++){
        const item = document.createElement('li');
        item.innerText = items[i];
        food.appendChild(item);
    }
}