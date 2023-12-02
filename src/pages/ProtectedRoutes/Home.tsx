import {
  Container,
  Pagination,
  Stack,
  Box,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useMoviesData from "../../hooks/useMoviesData";
import MovieCard from "../../components/ui/MovieCard";

const MAX_PAGE = 100;

export default function Home() {
  const { movies, page, setPage, setSearchTerm, searchTerm } = useMoviesData();
  console.log("Movies", movies);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          margin: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Filter by Title"
          inputProps={{ "aria-label": "Filter by Title" }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {movies
            ? movies.map((movie) => (
                <Box sx={{ height: "20rem", width: "20rem" }}>
                  <MovieCard movie={movie} key={movie.imdbID} />
                </Box>
              ))
            : `Movie with title  ${searchTerm} not found`}
        </Stack>
      </div>
      <Pagination
        color="primary"
        page={page}
        onChange={handlePageChange}
        count={MAX_PAGE}
      />
    </Container>
  );
}
