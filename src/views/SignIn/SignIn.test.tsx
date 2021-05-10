import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('should exist email and password input', () => {
    const { getByText } = render(<SignIn />);

    getByText('Email');
    getByText('Senha');
  });

  it('should render message if email and password is invalid', () => {
    const { getAllByTestId, getByText } = render(<SignIn />);

    const email = getAllByTestId('input')[0];
    const password = getAllByTestId('input')[1];

    fireEvent.change(email, { target: { value: 'example' } });
    fireEvent.change(password, { target: { value: '1234' } });
    fireEvent.click(getByText('Entrar'));

    getByText('Email e senha invalidos');
  });
})