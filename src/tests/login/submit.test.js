import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../../App';

describe('Testa o redirecionamento após o login', () => {
  test('a rota para a tela de receitas', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, 'email@teste.com');
    userEvent.type(passwordInput, 'senha123');
    userEvent.click(submitBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
