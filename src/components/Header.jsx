import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export const Header = () => {
  return (
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
  );
};
