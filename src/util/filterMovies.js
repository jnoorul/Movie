export function filterMovies(movies, category) {
  const movieByCategory = movies.filter(
    (movie) => movie.programType === category
  );
  const moviesAfter2010 = movieByCategory.filter(
    (movie) => movie.releaseYear >= 2010
  );

  const moviesSorted = moviesAfter2010.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return moviesSorted.slice(0, 21);
}
