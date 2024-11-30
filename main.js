const nav = document.querySelector('#nav-global');
const items = document.querySelectorAll('.items');
const menuItems = document.querySelectorAll('.menu');
const logo = document.querySelector('.logopath');
const icons = document.querySelectorAll('.nav-icon');
const backgroundColors = ['white'];

menuItems.forEach((menu, index) => {
  menu.addEventListener('mouseenter', () => {
    nav.style.backgroundColor = backgroundColors[index] || 'white';
    
    logo.style.fill = 'black';
    items.forEach(item => item.style.color = 'black');
    icons.forEach(icon => icon.style.fill = 'black');
  });

  menu.addEventListener('mouseleave', () => {
    nav.style.backgroundColor = '';
    logo.style.fill = 'white';
    items.forEach(item => item.style.color = 'white');
    icons.forEach(icon => icon.style.fill = 'white');
  });
});
