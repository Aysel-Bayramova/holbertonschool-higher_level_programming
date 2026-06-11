// Select the elements
const header = document.querySelector('header');
const redHeader = document.querySelector('#red_header');

// Add the 'red' class to the header on click
redHeader.addEventListener('click', function () {
  header.classList.add('red');
});
