import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import renderWithRouter from './renderWithRouter';

describe('Teste da página <Perfil/>', () => {
  test('Verifica se o ícone de bebidas existe e redireciona para /bebidas', () => {
    const { history } = renderWithRouter(<Profile />);
    const drinkIcon = screen.getByRole('img',
      { name: /drink icon/i });

    userEvent.click(drinkIcon);
    const { pathname } = history.location;

    expect(pathname).toBe('/bebidas');
    expect(drinkIcon).toBeInTheDocument();
  });

  test('Verifica se o ícone de explorar existe e rediciona para /explorar', () => {
    const { history } = renderWithRouter(<Profile />);
    const exploreIcon = screen.getByRole('img',
      { name: /explore icon/i });

    userEvent.click(exploreIcon);
    const { pathname } = history.location;

    expect(pathname).toBe('/explorar');
    expect(exploreIcon).toBeInTheDocument();
  });

  test('Verifica se o ícone de comidas existe e rediciona para /comidas', () => {
    const { history } = renderWithRouter(<Profile />);
    const mealIcon = screen.getByRole('img',
      { name: /meal icon/i });

    userEvent.click(mealIcon);
    const { pathname } = history.location;

    expect(pathname).toBe('/comidas');
    expect(mealIcon).toBeInTheDocument();
  });

  // test('Verifica se existe o ícone de perfil', () => {
  //   renderWithRouter(<Profile />);
  //   const profileIcon = screen.getByRole('button',
  //     { name: /user/i });

  //   expect(profileIcon).toBeInTheDocument();
  // });

  test('Verifica se existe o título Perfil', () => {
    renderWithRouter(<Profile />);
    const profileTitle = screen.getByRole('heading',
      { name: /perfil/i });

    expect(profileTitle).toBeInTheDocument();
  });

  test('Verifica se NÃO existe o botão de pesquisar', () => {
    renderWithRouter(<Profile />);
    const searchIcon = screen.getByRole('button',
      { name: /search/i });

    expect(searchIcon).not.toBeInTheDocument();
  });
});
