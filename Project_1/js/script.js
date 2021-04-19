let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Скільки фільмів ви уже переглянули?', ' ');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Скільки фільмів ви уже переглянули?', ' ');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function remeberMyFilns() {
	for (let i = 0; i < 2; i++) {
		const watchedMovies = prompt(
				' Один з останніх переглянутих фільмів? ',
				' '
			),
			rating = +prompt(' На скільки оцінете його? ');

		if (
			typeof watchedMovies === 'string' &&
			typeof watchedMovies !== null &&
			watchedMovies != ' ' &&
			typeof rating != null &&
			rating != ' ' &&
			watchedMovies.length < 50
		) {
			console.log('done');
		} else {
			i--;
		}
		personalMovieDB.movies[watchedMovies] = rating;
	}
}
// remeberMyFilns();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Ви переглянули малувато фільмів');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Ви класичний глядач');
	} else if (personalMovieDB.count >= 30) {
		console.log('Ви кіноман');
	} else {
		console.log('Error!');
	}
}
// detectPersonalLevel();

function schowMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
schowMyDB(personalMovieDB.privat);
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`Ваш улюлений жанр під номером ${i},`
		);
	}
}
writeYourGenres();
