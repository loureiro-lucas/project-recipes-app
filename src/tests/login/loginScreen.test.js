import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const testEmailInput = 'email-input';
const emailTest = 'email@teste.com';
const testPasswordInput = 'password-input';
const testEnterBtn = 'login-submit-btn';

describe('Testa os elementos da tela de Login', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('existe um input de email', () => {
    const emailInput = screen.getByTestId(testEmailInput);

    expect(emailInput).toBeInTheDocument();
  });

  test('existe um input de senha', () => {
    const passInput = screen.getByTestId(testPasswordInput);

    expect(passInput).toBeInTheDocument();
  });

  test('existe um botão "Entrar"', () => {
    const enterButton = screen.getByTestId(testEnterBtn);

    expect(enterButton).toBeInTheDocument();
  });
});

describe('Testa a interação com os inputs', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('é possível escrever o email', () => {
    const emailInput = screen.getByTestId(testEmailInput);

    userEvent.type(emailInput, emailTest);

    expect(emailInput).toHaveValue('email@teste.com');
  });

  test('é possível escrever a senha', () => {
    const passInput = screen.getByTestId(testPasswordInput);

    userEvent.type(passInput, 'senha123');

    expect(passInput).toHaveValue('senha123');
  });
});

describe('Testa a validade do formulário', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('botão está desativado se o email for inválido', () => {
    const emailInput = screen.getByTestId(testEmailInput);
    const enterBtn = screen.getByTestId(testEnterBtn);

    userEvent.type(emailInput, 'email');
    expect(enterBtn).toBeDisabled();
  });

  test('botão está desativado se a senha for inválida', () => {
    const passwordInput = screen.getByTestId(testPasswordInput);
    const enterBtn = screen.getByTestId(testEnterBtn);

    userEvent.type(passwordInput, 'senha');

    expect(enterBtn).toBeDisabled();
  });

  test('botão está ativado se email e senha forem válidos', () => {
    const emailInput = screen.getByTestId(testEmailInput);
    const passwordInput = screen.getByTestId(testPasswordInput);
    const enterBtn = screen.getByTestId(testEnterBtn);

    userEvent.type(emailInput, emailTest);
    userEvent.type(passwordInput, 'senha123');

    expect(enterBtn).not.toBeDisabled();
  });
});
