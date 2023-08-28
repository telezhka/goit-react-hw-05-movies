import { Credits } from 'components/Credits';
import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';
export const Cast = () => {
  const { credits, isLoading, isError } = useFetchMovieCredits();
  return (
    <section>
      <div>
        {isLoading && <p>Is loading</p>}
        {isError && <p>Something wrong...</p>}
        {credits && <Credits credits={credits} />}
      </div>
    </section>
  );
};
