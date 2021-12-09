import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = ({ pageTitle, showSearchIcon }) => {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);

  return (
    <header className="header-full-container">
      <div className="header-top-container">
        <Link to="/perfil" className="profile-link">
          <input
            type="image"
            alt="user"
            src={ profileIcon }
            data-testid="profile-top-btn"
          />
        </Link>

        <h1 className="pageTitle" data-testid="page-title">{ pageTitle }</h1>

        { showSearchIcon
          ? (
            <input
              type="image"
              alt="search"
              src={ searchIcon }
              data-testid="search-top-btn"
              onClick={ () => setIsSearchBarShown(!isSearchBarShown) }
            />)
          : <div className="search-icon-placeholder" /> }
      </div>

      { isSearchBarShown && (
        <form className="header-search-bar-container">
          <label htmlFor="search-input">
            <input
              type="text"
              name="search-input"
              id="search-input"
              placeholder="Search recipe"
              data-testid="search-input"
            />
          </label>
          <div className="search-by-container">
            <label htmlFor="ingredient">
              <input
                type="radio"
                id="ingredient"
                name="search-by"
                value="ingredient"
                data-testid="ingredient-search-radio"
              />
              Ingrediente
            </label>
            <label htmlFor="name">
              <input
                type="radio"
                id="name"
                name="search-by"
                value="name"
                data-testid="name-search-radio"
              />
              Nome
            </label>
            <label htmlFor="first-letter">
              <input
                type="radio"
                id="first-letter"
                name="search-by"
                value="first-letter"
                data-testid="first-letter-search-radio"
              />
              Primeira Letra
            </label>
          </div>
          <button type="submit" data-testid="exec-search-btn">Buscar</button>
        </form>
      ) }
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};

export default Header;
