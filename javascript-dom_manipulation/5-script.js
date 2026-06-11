// Select the header and the button
const header = document.querySelector('header');
const updateHeader = document.querySelector('#update_header');

// Update the text content when the button is clicked
updateHeader.addEventListener('click', function () {
  header.textContent = 'New Header!!!';
});
