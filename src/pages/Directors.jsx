import { directors } from "../data";

export default function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir) => (
        <article key={dir.name}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}