import React, { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChangeValue: (value: string) => void,
  label: string;
}

function Input(props: Props) {

  const { value, onChangeValue, label } = props;

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.target;
    onChangeValue(value);
  }

  return (
    <div>
      <div>{label}</div>
      <input value={value} onChange={(event) => handleChangeInput(event)} data-testid="input" />
    </div>
  )
}

export default Input;