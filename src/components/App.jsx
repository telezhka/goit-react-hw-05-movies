import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { routes } from 'routes';
import { Home, MovieDetails, Movies } from 'pages';

export const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e3e3e3',
            position: 'fixed',
            top: '0',
            width: '100%',
            height: '50px',
          }}
        >
          <Routes>
            <Route path={routes.HOME} element={<Header />}>
              <Route index element={<Home />} />
              <Route path={routes.MOVIES} element={<Movies />} />
              <Route path={routes.MOVIE_ID} element={<MovieDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
