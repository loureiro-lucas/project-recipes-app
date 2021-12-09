import React from 'react';
import { screen } from '@testing-library/react';
import Footer from '../components/Footer';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente <Footer/>', () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });

  test('Verifica se existe o ícone de bebidas', () => {
    const drinkIcon = screen.getByRole('img',
      { name: /drink icon/i });

    expect(drinkIcon).toBeInTheDocument();
  });

  test('Verifica se existe o ícone de explorar', () => {
    const exploreIcon = screen.getByRole('img',
      { name: /explore icon/i });

    expect(exploreIcon).toBeInTheDocument();
  });

  test('Verifica se existe o ícone de comidas', () => {
    const mealIcon = screen.getByRole('img',
      { name: /meal icon/i });

    expect(mealIcon).toBeInTheDocument();
  });
});
