// Select the elements
const header = document.querySelector('header');
const toggleHeader = document.querySelector('#toggle_header');

// Toggle between 'red' and 'green' classes on click
toggleHeader.addEventListener('click', function () {
  header.classList.toggle('red');
  header.classList.toggle('green');
});
