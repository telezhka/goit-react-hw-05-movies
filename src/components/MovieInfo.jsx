export const MovieInfo = ({
  movie: { title, poster_path, vote_average, overview, genres = [] },
}) => {
  //   console.log(genres);
  const onlyGenres = genres.map(genre => genre.name);
  //   console.log('only', onlyGenres);
  return (
    <section>
      <img src={poster_path} alt={title} />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{onlyGenres.join(', ')}</p>
    </section>
  );
};
