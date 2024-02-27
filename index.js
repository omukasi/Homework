// function start() {
//     numberOfFilms = +prompt("How many films have you watched", "");
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many films have you watched", "");
//     }
// }
// start();

// function detectPersonalLevel() {
//     if (numberOfFilms < 10) {
//         console.log("Not enough films");
//     } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
//         console.log("You are a classic watcher");
//     } else if (numberOfFilms > 30) {
//         console.log("You are cineman");
//     } else {
//         console.log("Error!");
//     }
    
// }

// detectPersonalLevel();


let personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you watched", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched", "");
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Not enough films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("You are a classic watcher");
        } else if (personalMovieDB.count > 30) {
            console.log("You are cineman");
        } else {
            console.log("Error!");
        }
    },
    rememberMyFilms: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Your favorite genre by number ${i}`);
           
            // if (genre == "" || genre == null) {
            //     console.log("Incorrect data");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`Enter your favorite genres through the coma`);
            if (genres == "" || genres == null) {
                    console.log("Incorrect data");
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(", ");
                    personalMovieDB.genres.sort();
                }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is ${item}`);
        });
        

    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();



// let lastWatchedFilm1 = prompt("What is the last watched film?", ""),
//     filmEstimation1 = prompt("What is your estimation of last watched film?", ""),
//     lastWatchedFilm2 = prompt("What is the last watched film?", ""),
//     filmEstimation2 = prompt("What is your estimation of last watched film?", "");

    // function rememberMyFilms() {
    //     for (i = 0; i < 2; i++) {
    //         let lastWatchedFilm1 = prompt("What is the last watched film?", ""),
    //             filmEstimation1 = prompt("What is your estimation of last watched film?", "");
                
    
    //             if (lastWatchedFilm1 != null && filmEstimation1 != null && lastWatchedFilm1 != "" && filmEstimation1 != "" && lastWatchedFilm1.length < 50) {
    //                 personalMovieDB.movies[lastWatchedFilm1] = filmEstimation1;
    //                 console.log("Done!");
    //             } else {
    //                 console.log("Error!");
    //                 i--;
    //             }
    //         }
    // }

    // rememberMyFilms();


    // function showMyDB(hidden) {
    //     if (!hidden) {
    //         console.log(personalMovieDB);
    //     }
    // }
    
    // showMyDB(personalMovieDB.privat);

    // function writeYourGenres () {
    //     for (let i = 1; i <= 3; i++) {
    //     personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}`);
    //     // personalMovieDB.genres[i - 1] = genre;
    // }
    //     }
   