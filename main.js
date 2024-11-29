const nav = document.querySelector('#nav-global');
const items = document.querySelector('.items');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logopath');
const icons = document.querySelectorAll('.nav-icon');

menu.addEventListener('mouseenter', () => {
  nav.style.backgroundColor = 'white';
  logo.style.fill = 'black';
  items.style.color = 'black'
  icons.forEach(icon => icon.style.fill = 'black');
});

menu.addEventListener('mouseleave', () => {
  nav.style.backgroundColor = ''; 
  logo.style.fill = 'white';
  items.style.color = "white";
  icons.forEach(icon => icon.style.fill = 'white');
});