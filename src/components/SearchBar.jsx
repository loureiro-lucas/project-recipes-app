import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  handleSubmitSearch,
  searchValue,
  handleSearchInput,
  handleSearchBy,
}) => (
  <form
    className="header-search-bar-container"
    autoComplete="off"
    onSubmit={ handleSubmitSearch }
  >
    <label htmlFor="search-input">
      <input
        type="text"
        name="search-input"
        className="search-input"
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
          defaultChecked
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
    <button type="submit" data-testid="exec-search-btn">
      Buscar
    </button>
  </form>
);

SearchBar.propTypes = {
  handleSubmitSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchBy: PropTypes.func.isRequired,
};

export default SearchBar;
