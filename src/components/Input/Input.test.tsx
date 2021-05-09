import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';

describe('Input', () => {
  const inputMock = jest.fn();
  it('should exist a input and it can change the value', () => {
    const { getByTestId } = render(<Input value="" onChangeValue={inputMock} />);

    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'lorem ipsum' } });

    expect(inputMock).toHaveBeenCalled();    
  });
});