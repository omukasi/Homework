let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched", "");
    }
}
start();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("Not enough films");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log("You are a classic watcher");
    } else if (numberOfFilms > 30) {
        console.log("You are cineman");
    } else {
        console.log("Error!");
    }
    
}

detectPersonalLevel();


let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

// let lastWatchedFilm1 = prompt("What is the last watched film?", ""),
//     filmEstimation1 = prompt("What is your estimation of last watched film?", ""),
//     lastWatchedFilm2 = prompt("What is the last watched film?", ""),
//     filmEstimation2 = prompt("What is your estimation of last watched film?", "");

    function rememberMyFilms() {
        for (i = 0; i < 2; i++) {
            let lastWatchedFilm1 = prompt("What is the last watched film?", ""),
                filmEstimation1 = prompt("What is your estimation of last watched film?", "");
                
    
                if (lastWatchedFilm1 != null && filmEstimation1 != null && lastWatchedFilm1 != "" && filmEstimation1 != "" && lastWatchedFilm1.length < 50) {
                    personalMovieDB.movies[lastWatchedFilm1] = filmEstimation1;
                    console.log("Done!");
                } else {
                    console.log("Error!");
                    i--;
                }
            }
    }

    rememberMyFilms();

    console.log(personalMovieDB);

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    
    showMyDB(personalMovieDB.privat);

    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
    }
        }
   writeYourGenres();