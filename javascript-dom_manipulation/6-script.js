// Select the character element
const characterDiv = document.querySelector('#character');

// Fetch the character data
fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
  .then(response => response.json())
  .then(data => {
    // Update the character element with the name
    characterDiv.textContent = data.name;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
