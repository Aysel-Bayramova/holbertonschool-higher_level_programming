// Select the button and the list
const addItem = document.querySelector('#add_item');
const myList = document.querySelector('.my_list');

// Add a new li element on click
addItem.addEventListener('click', function () {
  const newItem = document.createElement('li');
  newItem.textContent = 'Item';
  myList.appendChild(newItem);
});
