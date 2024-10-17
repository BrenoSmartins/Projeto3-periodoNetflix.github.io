document.getElementById('genre-select').addEventListener('change', function() {
    var selectedGenre = this.value;
    var movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(function(card) {
        if (selectedGenre === 'todos' || card.classList.contains(selectedGenre)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});