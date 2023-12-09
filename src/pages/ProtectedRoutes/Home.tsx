import {
  Pagination,
  Stack,
  Box,
} from "@mui/material";

import MovieCard from "../../components/ui/MovieCard";
import useMoviesStore from "../../store/MovieStore";


export default function Home() {

  const movies = useMoviesStore(state => state.movies);
  const page = useMoviesStore(state => state.page);
  const maxPage = useMoviesStore(state => state.maxPage);
  const setPage = useMoviesStore(state => state.setPage)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <>
      <section>

        <Stack
          className="w-full"
          flexWrap="wrap"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {movies
            ? movies.map((movie) => (
              <Box sx={{ height: "25rem", width: "20rem" }} key={movie.imdbID}>
                <MovieCard movie={movie} card={false} />
              </Box>
            ))
            : <p className="text-4xl mt-20 text-red-600">Movie not found, please write the name again</p>}
        </Stack>


      </section>

      <div className={`${!movies  ? 'mt-40' : ''} bg-white mt-4 p-4 flex justify-center w-full`}>

        <Pagination

          size="large"
          color="primary"
          page={page}
          onChange={handlePageChange}
          count={maxPage}
        />

      </div>
    </>
  );
}
