import React, { createContext, useContext, useState } from "react";
import { GenreResponseProps, MovieProps } from "../App";

export interface IAppContext {
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
  genres: Array<GenreResponseProps>;
  setGenres: React.Dispatch<React.SetStateAction<GenreResponseProps[]>>;
  movies: Array<MovieProps>;
  setMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  selectedGenre: GenreResponseProps;
  setSelectedGenre: React.Dispatch<React.SetStateAction<GenreResponseProps>>;
}

export const AppContext = createContext({} as IAppContext);

const AppProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  return (
    <AppContext.Provider
      value={{
        genres,
        movies,
        selectedGenre,
        selectedGenreId,
        setGenres,
        setMovies,
        setSelectedGenre,
        setSelectedGenreId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export function useAppContext(): IAppContext {
  const context = useContext(AppContext);
  return context;
}

export default AppProvider;
