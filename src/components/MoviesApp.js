import { useEffect, useState } from "react";
import { filterMovies } from "../util/filterMovies";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { Series } from "./Series";

export function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.entries;
        setMovies(movies);
      });
  });

  return (
    <div>
      <Header />
      {page === "Home" && (
        <Home
          onMoviesClick={() => setPage("Movies")}
          onSeriesClick={() => setPage("Series")}
        />
      )}
      {page === "Movies" && <Movies movies={filterMovies(movies, "movie")} />}
      {page === "Series" && <Series series={filterMovies(movies, "series")} />}
    </div>
  );
}
