import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { routes } from 'routes';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
// import { Home, MovieDetails, Movies } from 'pages';

export const App = () => {
  return (
    // <BrowserRouter basename="/goit-react-hw-05-movies">
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIES_ID} element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
    // </BrowserRouter>
  );
};
