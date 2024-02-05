let numberOfFilms = prompt("How many films have you watched", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let lastWatchedFilm1 = prompt("What is the last watched film?", ""),
    filmEstimation1 = prompt("What is your estimation of last watched film?", ""),
    lastWatchedFilm2 = prompt("What is the last watched film?", ""),
    filmEstimation2 = prompt("What is your estimation of last watched film?", "");

    personalMovieDB.movies[lastWatchedFilm1] = filmEstimation1;
    personalMovieDB.movies[lastWatchedFilm2] = filmEstimation2;

    console.log(personalMovieDB);