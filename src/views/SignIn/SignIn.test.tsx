// var mockAxios = jest.fn();

// jest.mock('axios', () => {
//   return {
//     post: mockAxios
//   };
// });
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignIn from './SignIn';

import axios from 'axios'
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('SignIn', () => {

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  })

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

  it('should add token in localStorage', async () => {
    mockedAxios.post.mockResolvedValue({ data: { acessToken: 'abc' } });

    const { getAllByTestId, getByText } = render(<SignIn />);

    const email = getAllByTestId('input')[0];
    const password = getAllByTestId('input')[1];
    
    await fireEvent.change(email, { target: { value: 'example@teste.com' } });
    await fireEvent.change(password, { target: { value: '123456' } });
    await fireEvent.click(getByText('Entrar'));    

    expect(axios.post).toHaveBeenCalledWith("http://localhost:8000/signin", {"email": "example@teste.com", "password": "123456"});
  });
})