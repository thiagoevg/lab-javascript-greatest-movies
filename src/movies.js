// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  return movies.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  return array
    .filter(function (movie) {
      return movie.director === "Steven Spielberg";
    })
    .filter(function (movie) {
      return movie.genre.indexOf("Drama") !== -1;
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let rates = movies.map(function (movie) {
    return movie.rate;
  });
  return parseFloat(
    (
      rates.reduce(function (accumulator, currentElement) {
        if (typeof currentElement === "number") {
          return accumulator + currentElement;
        } else {
          return accumulator + 0;
        }
      }) / movies.length
    ).toFixed(2)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  if (movies.length === 1) {
    return movies[0].rate;
  }
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.indexOf("Drama") !== -1;
  });
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let clonedMovies = [...movies];
  return clonedMovies.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(movies) {
//   let orderedList = movies.sort(function (a, b) {
//     if (a.title > b.title) {
//       return 1;
//     }
//     if (a.title < b.title) {
//       return -1;
//     }
//     return 0;
//   });
//   let orderedTitles = orderedList.map(function (movie) {
//     return movie.title;
//   });
//   return orderedTitles.slice(0, 20);
// }

function orderAlphabetically(movies) {
  let clonedMovies = [...movies];
  let orderedList = clonedMovies.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  let orderedTitles = orderedList.map(function (movie) {
    return movie.title;
  });
  return orderedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
