import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Label, BasicInput } from './styles';

interface Props {
  inputValue: string;
  onChangeValue: (value: string) => void;
  label: string;
}
const Input: React.FunctionComponent<Props> = ({ inputValue, onChangeValue, label }) => {
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.target;
    onChangeValue(value);
  }
  return (
    <InputContainer>
      <Label>{label}</Label>
      <BasicInput 
        value={inputValue} 
        onChange={handleChangeInput} 
        data-testid="input" 
      />
    </InputContainer>
  );
};
Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default Input;
