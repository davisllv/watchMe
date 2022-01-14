import { useEffect } from "react";
import { GenreResponseProps, MovieProps } from "../App";
import { useAppContext } from "../context/AppContext";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

export function Content() {
  const {
    selectedGenre,
    movies,
    setGenres,
    selectedGenreId,
    setMovies,
    setSelectedGenre,
  } = useAppContext();

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
