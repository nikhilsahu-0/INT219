'use strict';
const menu = document.querySelector(".list");
const menuList = document.querySelector(".menu")
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');


const addOverlay = function () {
    overlay.classList.remove('hidden');
    menuList.classList.remove('hidden');
}
const removeOverlay = function () {
    menuList.classList.add('hidden');
    overlay.classList.add('hidden');
};

overlay.classList.add('hidden');
menuList.classList.add('hidden');
menu.addEventListener('click', addOverlay);
overlay.addEventListener('click', removeOverlay);
html.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') removeOverlay();
});
