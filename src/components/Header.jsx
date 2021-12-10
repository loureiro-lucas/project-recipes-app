import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = ({ pathname, showSearchIcon }) => {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const { filterRecipes } = useContext(RecipesContext);

  const pageTitle = (pathname === '/comidas') ? 'Comidas' : 'Bebidas';

  const handleSearchInput = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSearchBy = ({ target: { value } }) => {
    setSearchBy(value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    filterRecipes(pathname, searchValue, searchBy);
  };

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
        <form
          className="header-search-bar-container"
          autoComplete="off"
          onSubmit={ handleSubmitSearch }
        >
          <label htmlFor="search-input">
            <input
              type="text"
              name="search-input"
              id="search-input"
              value={ searchValue }
              placeholder="Search recipe"
              data-testid="search-input"
              onChange={ handleSearchInput }
            />
          </label>
          <div className="search-by-container" onChange={ handleSearchBy }>
            <label htmlFor="ingredient">
              <input
                type="radio"
                id="ingredient"
                name="search-by"
                value="ingredient"
                checked={ searchBy === 'ingredient' }
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
                checked={ searchBy === 'name' }
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
                checked={ searchBy === 'first-letter' }
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
  pathname: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};

export default Header;
