import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Routes from '../../routes';
import RecipesProvider from '../../context/RecipesProvider';

describe('Testa os elementos do componente <Header />', () => {
  test('existem os elementos do protótipo', () => {
    const { history } = renderWithRouter(<RecipesProvider><Routes /></RecipesProvider>);
    const { pathname } = history.location;
    history.push('/comidas');
    console.log(pathname, history);

    const profileBtn = screen.getByTestId('profile-top-btn');
    const pageTitle = screen.getByTestId('page-title');
    const searchBtn = screen.getByTestId('search-top-btn');

    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
});
