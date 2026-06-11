#!/usr/bin/node
// Elementləri seçirik
const header = document.querySelector('header');
const redHeader = document.querySelector('#red_header');

// Klik hadisəsini (event) dinləyirik
redHeader.addEventListener('click', function () {
  header.style.color = '#FF0000';
});
