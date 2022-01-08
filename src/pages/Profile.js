import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Profile.css';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <>
      <Header pageTitle="Perfil" showSearchIcon={ false } />
      <div className="profile-container">
        <h3 data-testid="profile-email">
          { email }
        </h3>

        <Link to="/receitas-feitas">
          <button
            className="profile-btn"
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>

        <Link to="receitas-favoritas">
          <button
            className="profile-btn"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>

        <Link to="/">
          <button
            className="profile-btn"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
