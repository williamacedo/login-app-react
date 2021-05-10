import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';

describe('Input', () => {
  const inputMock = jest.fn();
  it('should exist a input and it can change the value', () => {
    const { getByTestId, getByText } = render(<Input value="" onChangeValue={inputMock} label="Example" />);

    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'lorem ipsum' } });

    getByText('Example');
    expect(inputMock).toHaveBeenCalledWith('lorem ipsum');   
  });
});