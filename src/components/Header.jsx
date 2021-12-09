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
        <div className="header-search-bar-container">
          <label htmlFor="search-input">
            <input
              type="text"
              name="search-input"
              id="search-input"
              placeholder="Search recipe"
              data-testid="search-input"
            />
          </label>
        </div>
      ) }
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};

export default Header;
