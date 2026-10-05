const nameText = "Diksha Chodha";
const span = document.querySelector("#typing-text span");

let index = 0;

function typeName() {
    if (index < nameText.length) {
        span.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeName, 300);
    }
}

typeName();


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});