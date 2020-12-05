export function Home(props) {
  return (
    <div>
      <button onClick={props.onMoviesClick}>Movies</button>
      <button onClick={props.onSeriesClick}>Series</button>
    </div>
  );
}
