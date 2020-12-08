import '../styles.css';
const refs = {
    body: document.querySelector('body'),
    changeTheme: document.querySelector('#theme-switch-toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.changeTheme.addEventListener('change', onChangeTheme);
refs.changeTheme.addEventListener('change', setLocalStorage);

function onChangeTheme(event) {
    event.preventDefault();
    const check = refs.changeTheme.checked;
    if (check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}
function setLocalStorage() {
    const check = refs.changeTheme.checked;
    if (check) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const themeLocal = localStorage.getItem('theme');

if (themeLocal === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.changeTheme.checked = true;
}