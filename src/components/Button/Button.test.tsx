import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
  const handleButton = jest.fn();
  it('should render button name', () => {
    const { getByText } = render(<Button name="Lorem" click={handleButton} />);

    getByText('Lorem');
  });

  it('should call handleButton mock when click on button', () => {
    const { getByText } = render(<Button name="Lorem" click={handleButton} />);

    const button = getByText('Lorem');

    fireEvent.click(button);

    expect(handleButton).toHaveBeenCalled();
  });  
})