import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button,
} from "@mui/material";
import { Movie } from "../../hooks/useMoviesData";
import useMoviesStore from "../../store/MovieStore";

export default function MovieCard({ movie, card = false }: { movie: Movie, card: boolean } ) {

  const movies = useMoviesStore(s => s.movies);

  const addToCard = useMoviesStore(s => s.addToTheCard);


  const handleAddToTheCard = (id: string) => {

    // GET THE MOVIE WE WANT TO ADD

    const movie: Movie = movies.filter(m => m.imdbID == id)[0];

    // ADD TO THE CARD

    addToCard(movie);
  }

  return (

    <Card sx={{
      width: "100%",
    }} >

      <CardMedia
        sx={{ height: 140 }}
        image={movie.Poster}
        title={`${movie.Title} poster`}
      />
      <CardContent >

        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>

        <CardActions>

          <Chip color="primary" label={movie.Type} />

          <Chip color="secondary" label={movie.Year} />

        </CardActions>

        <Button fullWidth className="mt-4" onClick={() => handleAddToTheCard(movie.imdbID)}
          variant="contained"

          color={card ? "error" : "success"}>

          {card ? "delete" : "Add"}
        </Button>

      </CardContent>
    </Card>
  );
}
