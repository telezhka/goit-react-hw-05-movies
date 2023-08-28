export const Credits = ({ credits }) => {
  return (
    <ul>
      {credits.map(({ profile_path, character, name, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
