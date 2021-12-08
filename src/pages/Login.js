import React, { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, isButtonEnabled] = useState(true);

  const handleSubmit = () => {
    const MIN_CHARACTER = 6;
    const EMAIL_REGEX = /\S+@\S+\.\S+/;

    if (password.length >= MIN_CHARACTER && EMAIL_REGEX.test(email)) {
      isButtonEnabled(false);
    } else {
      isButtonEnabled(true);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email-input">
        Email:
        <input
          type="email"
          name="email"
          id="email-input"
          data-testid="email-input"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
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
          onChange={ ({ target: { value } }) => setPassword(value) }
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
