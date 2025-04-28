// src/components/Movie.jsx
import { useParams } from "react-router-dom";
import { movies } from "../data";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <h3>Genres:</h3>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
}
