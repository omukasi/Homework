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

    //Логические операторы

    console.log(NaN || 2 || undefined);   //2
    console.log(NaN && 2 && undefined);   // NaN
    console.log(1 && 2 && 3);   //3
    console.log(!1 && 2 && !3);  //false
    console.log(25 || null && !3); //25
    console.log(NaN || null || !3 || undefined || 5);  //5
    console.log(NaN || null && !3 && undefined || 5);  //5
    console.log(5 === 5 && 3 > 1 || 5);  //true
