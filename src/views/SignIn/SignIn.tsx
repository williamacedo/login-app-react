import React, { useState } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { emailRegex } from '../../utils/regex';

function SignIn() {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isValidLogin, setValidLogin] = useState(true);

  function validateLogin() {
    if(!email.match(emailRegex) && password.length < 6) {
      setValidLogin(false);
    }
  }

  function onLoginClick() {
    validateLogin();
  }

  return (
    <div>
      {!isValidLogin && <p>Email e senha invalidos</p>}
      <Input value={email} onChangeValue={onChangeEmail} label="Email" />
      <Input value={password} onChangeValue={onChangePassword} label="Senha" />
      <Button click={onLoginClick} name="Entrar" />
    </div>
  );
}

export default SignIn;