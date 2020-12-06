import './styles.css';
import itemsElement from './menu.json';
import itemsTemplate from './templates/menu_item.hbs';

const menu = document.querySelector('.js-menu');
const markup = itemsTemplate(itemsElement);
menu.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const bodySelector = document.querySelector('body'); 
const inputChecked = document.querySelector('.theme-switch__toggle'); 

inputChecked.addEventListener('click', inputCheckedClick);

if (localStorage.getItem('ThemeColor') === Theme.DARK) {
    bodySelector.classList.remove(Theme.LIGHT);
    bodySelector.classList.add(Theme.DARK);
    inputChecked.checked = true;
  } else {
    bodySelector.classList.remove(Theme.DARK);
    bodySelector.classList.add(Theme.LIGHT);
  }

function inputCheckedClick(){
    if(inputChecked.checked){
        bodySelector.classList.remove(Theme.LIGHT);
        bodySelector.classList.add(Theme.DARK);
    } else {
        bodySelector.classList.remove(Theme.DARK);
        bodySelector.classList.add(Theme.LIGHT);
    }
    let ChangeTheme = bodySelector.getAttribute('class');
    localStorage.setItem('ThemeColor', ChangeTheme);
};