import { useState, useEffect } from "react";
const DEFAULT_MOVIE_SEARCH = "Batman";

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

function useMoviesData() {
  const [movies, setMovies] = useState<Array<Movie>>();
  const [searchTerm, setSearchTerm] = useState(DEFAULT_MOVIE_SEARCH);
  const [page, setPage] = useState(1);
  console.log(movies)


  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=b7f28821`,
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.Search);
      })
      .catch((error) => {
        // Just present the user as 404
        // and log the real error message in the log
        console.error(`Error fetching movies: `, error);
      });
  }, [searchTerm, page]);

  return { movies, searchTerm, setSearchTerm, setPage, page };
}
