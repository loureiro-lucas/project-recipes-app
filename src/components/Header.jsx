import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = ({ pathname, showSearchIcon, pageTitle }) => {
  // const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  const { filterRecipes,
    isSearchBarShown, setIsSearchBarShown } = useContext(RecipesContext);

  const history = useHistory();

  const handleSearchInput = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSearchBy = ({ target: { value } }) => {
    setSearchBy(value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (searchBy === 'first-letter' && searchValue.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      filterRecipes(pathname, searchValue, searchBy)
        .then((response) => {
          if (response.length === 1) {
            history.push(
              `${pathname}/${pathname.includes('/comidas')
                ? response[0].idMeal : response[0].idDrink}`,
            );
          }
        });
    }
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
        <SearchBar
          handleSubmitSearch={ handleSubmitSearch }
          searchValue={ searchValue }
          handleSearchInput={ handleSearchInput }
          handleSearchBy={ handleSearchBy }
        />
      ) }
    </header>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};

export default Header;
