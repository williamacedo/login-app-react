import React from 'react';
import PropTypes from 'prop-types';
import { SimpleButton } from './styles';

interface ButtonProps {
  name: string;
  click: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, click }) => (
  <SimpleButton type="button" onClick={click} data-testid="test-button">
    {name}
  </SimpleButton>
);
 
Button.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
export default Button;
