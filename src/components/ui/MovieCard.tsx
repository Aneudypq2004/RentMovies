import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CardActions,
} from "@mui/material";
import { Movie } from "../../hooks/useMoviesData";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={movie.Poster}
        title={`${movie.Title} poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip color="primary" label={movie.Type} />
        <Chip color="secondary" label={movie.Year} />
        <Chip color="warning" label={movie.imdbID} />
      </CardActions>
    </Card>
  );
}
