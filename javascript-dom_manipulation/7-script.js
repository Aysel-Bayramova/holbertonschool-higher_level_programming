// Select the list element
const listMovies = document.querySelector('#list_movies');

// Fetch the film data
fetch('https://swapi-api.hbtn.io/api/films/?format=json')
  .then(response => response.json())
  .then(data => {
    // Iterate through the results array
    data.results.forEach(film => {
      const li = document.createElement('li');
      li.textContent = film.title;
      listMovies.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching films:', error);
  });
