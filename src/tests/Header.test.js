import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Recipes from '../pages/Recipes';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente <Header />', () => {
  const { history } = renderWithRouter(<Recipes />);
  console.log(history);
  // const { pathname } = history.location;

  // describe('botão perfil do usuário', () => {
  //   const profileIcon = screen.getByRole('button', {
  //     name: /user/i,
  //   });

  //   test('verifica se existe o botão perfil do usuário', () => {
  //     expect(profileIcon).toBeInTheDocument();
  //   });

  //   test('verifica se o clique no botão de perfil redireciona para a página de perfil',
  //     () => {
  //       userEvent.click(profileIcon);

  //       expect(pathname).toBe('/perfil');
  //     });
  // });

  // describe('titulo da página', () => {
  //   test('se existe um título na página', () => {
  //     const pageTitle = screen.getAllByTestId('page-title');

  //     expect(pageTitle).toBeInTheDocument();
  //   });
  // });

  // describe('botão de pesquisa', () => {
  //   test('verifica se existe o botão pesquisar', () => {
  //     const searchIcon = screen.getByRole('button', {
  //       name: /search/i,
  //     });
  //     expect(searchIcon).toBeInTheDocument();
  //   });

  //   test('verifica se o clique do botão pesquisar abre a barra de pesquisa', () => {
  //     const searchIcon = screen.getByRole('button', {
  //       name: /search/i,
  //     });

  //     userEvent.click(searchIcon);

  //     const searchInput = screen.getAllByTestId('search-input');

  //     expect(searchInput).toBeInTheDocument();
  //   });
  // });
});
