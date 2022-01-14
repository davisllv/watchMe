import { useEffect } from "react";
import { GenreResponseProps, MovieProps } from "../App";
import { useAppContext } from "../context/AppContext";
import { api } from "../services/api";
import { Button } from "./Button";

export function SideBar() {
  const {
    genres,
    setGenres,
    selectedGenreId,
    setMovies,
    selectedGenre,
    setSelectedGenreId,
    setSelectedGenre,
  } = useAppContext();

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
