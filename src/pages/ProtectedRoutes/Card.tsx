import useMoviesStore from "../../store/MovieStore"
import { Box } from "@mui/material";
import MovieCard from "../../components/ui/MovieCard";

export default function Card() {

  const card = useMoviesStore(state => state.card);

  return (
    <main className="bg-second p-4 justify-center w-11/12 flex flex-wrap gap-4">

      {card.length != 0 ? card.map(movie => (

        <Box sx={{ height: "20rem", width: "20rem" }} key={movie.imdbID}>
          <MovieCard movie={movie} card={true} />
        </Box>

      )) : <h1 className="text-center text-amber-600 text-4xl p-8">The card is empty</h1>}
    </main>

  )
}