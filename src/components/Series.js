export function Series({ series = [] }) {
  return (
    <div>
      {series.map((movie) => (
        <div>{movie.title} </div>
      ))}
    </div>
  );
}
