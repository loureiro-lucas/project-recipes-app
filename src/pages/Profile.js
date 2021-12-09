import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  // const getUserEmail = () => {
  //   const { email } = JSON.parse(localStorage.getItem('user'));
  // };

  return (
    <>
      <Header pageTitle="Perfil" showSearchIcon={ false } />

      <h1 data-testid="profile-email">
        { }
      </h1>

      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>

      <Link to="receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          // onClick={ localStorage.clear() }
        >
          Sair
        </button>
      </Link>

      <Footer />
    </>
  );
}

export default Profile;
