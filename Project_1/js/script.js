const numberOfFilms = +prompt('Скільки фільмів ви уже переглянули?', ' ');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const watchedMovies = prompt(' Один з останніх переглянутих фільмів? ', ' '),
	watchedMovies2 = prompt(' Один з останніх переглянутих фільмів? ', ' '),
	rating = +prompt(' На скільки оцінете його? '),
	rating2 = +prompt(' На скільки оцінете його? ');

personalMovieDB.movies[watchedMovies] = rating;
personalMovieDB.movies[watchedMovies2] = rating2;

console.log(personalMovieDB);
