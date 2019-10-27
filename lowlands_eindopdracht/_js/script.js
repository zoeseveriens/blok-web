/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector('#icon');
var menuElement = document.querySelector('.hidden');
var shadowElement = document.querySelector('.home_nav');
var button2 = document.querySelector('#categorie');
var filterElement = document.querySelector('.filter');

function klik() {
    menuElement.classList.toggle('show');
}

function removeShadow() {
    shadowElement.classList.toggle('shadow');
}

function showFilters() {
    filterElement.classList.toggle('show_filter');
}

button.addEventListener('click', klik);
button.addEventListener('click', removeShadow);
button2.addEventListener('click', showFilters);
