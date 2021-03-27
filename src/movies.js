// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  return movies
    .map(function (movie) {
      return movie.director;
    })
    .filter(function (director, index, sourceArray) {
      return sourceArray.indexOf(director) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  return array.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
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
  let avg =
    rates.reduce(function (accumulator, currentElement) {
      if (typeof currentElement === "number") {
        return accumulator + currentElement;
      } else {
        return accumulator + 0;
      }
    }) / movies.length;

  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let clonedMovies = [...movies];
  return clonedMovies.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let clonedMovies = [...movies];
  let onlyTitles = clonedMovies.map(function (movie) {
    return movie.title;
  });
  onlyTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  let top20 = onlyTitles.slice(0, 20);
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function modifyTimeFormat(originalTimeArr) {
  let hours = 0;
  let minutes = 0;
  if (originalTimeArr.length === 1) {
    if (originalTimeArr[0].includes("h")) {
      hours = parseInt(originalTimeArr[0].replace(/[a-z]ig/, ""));
    } else {
      minutes = parseInt(originalTimeArr[0].replace(/[a-z]ig/, ""));
    }
  }
  if (originalTimeArr.length === 2) {
    hours = parseInt(originalTimeArr[0].replace(/[a-z]ig/, ""));
    minutes = parseInt(originalTimeArr[1].replace(/[a-z]ig/, ""));
  }

  return hours * 60 + minutes;
}

function turnHoursToMinutes(movies) {
  let clonedMovies = [...movies];
  clonedMovies.map(function (movie) {
    let originalTimeArr = movie.duration.split(" ");
    movie.duration = modifyTimeFormat(originalTimeArr);
    return movie;
  });
  return clonedMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function avg(list) {
  return (
    list.reduce(function (acc, cur) {
      return acc + cur;
    }) / list.length
  );
}

function bestYearAvg(movies) {
  if (!movies.length) {
    return null;
  }
  let clonedMovies = [...movies];
  const yearlyRates = {};
  clonedMovies.forEach(function (movie) {
    if (!yearlyRates.hasOwnProperty(movie.year)) {
      yearlyRates[movie.year] = [];
      yearlyRates[movie.year].push(movie.rate);
    } else {
      yearlyRates[movie.year].push(movie.rate);
    }
  });
  let yearlyRatesArr = Object.entries(yearlyRates);
  let yearlyAvgRates = yearlyRatesArr.map(function (yearRates) {
    return [yearRates[0], avg(yearRates[1])];
  });
  yearlyAvgRates.sort(function (a, b) {
    return b[1] - a[1];
  });
  return `The best year was ${yearlyAvgRates[0][0]} with an average rate of ${yearlyAvgRates[0][1]}`;
}
