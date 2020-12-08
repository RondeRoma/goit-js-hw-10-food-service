import menuCard from '../template/food-card.hbs';
import menu from '../menu.json';
import '../styles.css';

const foodMenu = document.querySelector('.js-menu');

function createMenuMarkup(menu) {
    const menuMarkup = menu.map(menuCard).join('');
    foodMenu.insertAdjacentHTML('beforeend', menuMarkup);
}

createMenuMarkup(menu);