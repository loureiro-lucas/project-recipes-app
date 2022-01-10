import React, { useState } from 'react';
import PropTypes from 'prop-types';
import laricapp from '../images/laricapp.png';
import '../styles/Login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateEmail = (userEmail) => {
    // Consulta: https://ui.dev/validate-email-address-javascript/
    const EMAIL_REGEX = /\S+@\S+\.\S+/;

    if (EMAIL_REGEX.test(userEmail)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const validatePassword = (userPassword) => {
    const MIN_CHARACTER = 6;

    if (userPassword.length > MIN_CHARACTER) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleEmailInput = ({ target: { value } }) => {
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <div className="login-page">
      <img className="logo-laricapp" src={ laricapp } alt="laricapp" />
      <div className="form-container">
        <form onSubmit={ handleSubmit }>
          <label htmlFor="email-input">
            Email:
            <input
              className="login-input"
              type="email"
              name="email"
              id="email-input"
              data-testid="email-input"
              value={ email }
              onChange={ handleEmailInput }
            />
          </label>

          <label htmlFor="password-input">
            Senha:
            <input
              className="login-input"
              type="password"
              name="password"
              id="password-input"
              data-testid="password-input"
              value={ password }
              onChange={ handlePasswordInput }
            />
          </label>

          <button
            className="login-btn"
            type="submit"
            data-testid="login-submit-btn"
            disabled={ !(isEmailValid && isPasswordValid) }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
