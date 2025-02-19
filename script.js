/ Get references to elements
const addMovieBtn = document.getElementById('addMovieBtn');
const clearListBtn = document.getElementById('clearListBtn');
const movieInput = document.getElementById('movieInput');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');

// Array to store movie names
let movies = [];

// Function to update the displayed movie list and count
function updateMovieList() {
    // Clear the current list
    movieList.innerHTML = '';

    // Loop through the movies array and add each movie to the list
    movies.forEach((movie, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = movie;
        
        // Add event listener to remove the movie when clicked
        listItem.addEventListener('click', () => {
            removeMovie(index);
        });

        // Append the list item to the movie list
        movieList.appendChild(listItem);
    });

    // Update the total movie count
    movieCount.textContent = `Total Movies: ${movies.length}`;
}

// Function to add a movie to the array
function addMovie() {
    const movieName = movieInput.value.trim();

    // Prevent adding empty input
    if (movieName === '') {
        alert('Please enter a valid movie name.');
        return;
    }

    // Add the movie to the array and update the list
    movies.push(movieName);
    movieInput.value = ''; // Clear the input field
    updateMovieList();
}

// Function to remove a movie from the array
function removeMovie(index) {
    movies.splice(index, 1);
    updateMovieList();
}

// Function to clear the entire list
function clearList() {
    movies = [];
    updateMovieList();
}

// Event listeners
addMovieBtn.addEventListener('click', addMovie);
clearListBtn.addEventListener('click', clearList);

// Allow pressing 'Enter' to add movie
movieInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addMovie();
    }
});
