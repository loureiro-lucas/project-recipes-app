import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateInputs = () => {
    // Consulta: https://ui.dev/validate-email-address-javascript/
    const MIN_CHARACTER = 6;
    const EMAIL_REGEX = /\S+@\S+\.\S+/;

    if (password.length >= MIN_CHARACTER && EMAIL_REGEX.test(email)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleEmailInput = ({ target: { value } }) => {
    setEmail(value);
    validateInputs();
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPassword(value);
    validateInputs();
  };

  return (
    <form>
      <label htmlFor="email-input">
        Email:
        <input
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
          type="password"
          name="password"
          id="password-input"
          data-testid="password-input"
          value={ password }
          onChange={ handlePasswordInput }
        />
      </label>

      <button
        // redirect to /explorar
        type="submit"
        data-testid="login-submit-btn"
        disabled={ isButtonDisabled }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
