import { Link, Outlet } from 'react-router-dom';
import { routes } from 'routes';
// import styled from 'styled-components';

export const Header = () => {
  return (
    <div>
      <header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e3e3e3',
            // position: 'fixed',
            // top: '0',
            width: '100%',
            height: '50px',
          }}
        >
          <nav>
            <Link to={routes.HOME}>Home</Link>
            <Link to={routes.MOVIES}>Movies</Link>
            {/* <p>ndfjgxjnjs</p> */}
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
