import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../style/Header.css';

const Header = ({ pageTitle, showSearch }) => (
  <header className="header">
    <Link to="/perfil" className="profile-link">
      <input type="image" alt="user" src={ profileIcon } data-testid="profile-top-btn" />
    </Link>

    <h1 className="pageTitle" data-testid="page-title">{ pageTitle }</h1>

    { showSearch
      ? (
        <input
          type="image"
          alt="search"
          src={ searchIcon }
          data-testid="search-top-btn"
        />)
      : <div className="search-icon-placeholder" /> }
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};

export default Header;
