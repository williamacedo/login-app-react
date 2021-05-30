import React, { useState } from 'react';
import axios from 'axios';
import { 
  Container,
  Content, 
  Header, 
  MessageError, 
} 
  from './styles';
import { apiUrl } from '../../utils/api';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { emailRegex } from '../../utils/regex';

function SignIn() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isValidLogin, setValidLogin] = useState(true);

  async function onLoginRequest() {
    const data = { email, password };
    try {
      const loginRequest = await axios.post(`${apiUrl}/signin`, data);

      localStorage.setItem('token', loginRequest.data.accessToken);
    } catch {
      setValidLogin(false);
    }
  }

  function validateLogin() {
    if (!email.match(emailRegex) && password.length < 6) {
      setValidLogin(false);
    } else {
      onLoginRequest();
    }
  }

  function onLoginClick() {
    validateLogin();
  }

  return (
    <Container>
      <Header>Login</Header>
      <Content>
        {!isValidLogin && <MessageError>Email e senha invalidos</MessageError>}
        <Input inputValue={email} onChangeValue={onChangeEmail} label="Email" />
        <Input inputValue={password} onChangeValue={onChangePassword} label="Senha" />
        <Button click={onLoginClick} name="Entrar" />
      </Content>
    </Container>
  );
}

export default SignIn;
