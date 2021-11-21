const hamburgerMenu = document.querySelector('.hamburger-menu');
const listMenu = document.querySelector('.list');
const listItems = document.querySelectorAll('.list--item');
const navLogo = document.querySelector('.nav-logo');

const menuControler = () => {
    listMenu.classList.toggle('list--active');
    hamburgerMenu.classList.toggle('hamburger--active');
    
};

hamburgerMenu.addEventListener('click', menuControler);
navLogo.addEventListener('click', () => {
    listMenu.classList.remove('list--active');
    hamburgerMenu.classList.remove('hamburger--active');
});
listItems.forEach(element => {
    element.addEventListener('click', menuControler);
});
