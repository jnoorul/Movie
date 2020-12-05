export function Movies({ movies = [] }) {
  return (
    <div>
      {movies.map((movie) => (
        <div>{movie.title} </div>
      ))}
    </div>
  );
}
