// src/components/MovieCard.js
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
}