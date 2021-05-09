import React, { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChangeValue: (value: string) => void
}

function Input(props: Props) {

  const { value, onChangeValue } = props;

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.target;
    onChangeValue(value);
  }

  return (
    <div>
      <input value={value} onChange={(event) => handleChangeInput(event)} data-testid="input" />
    </div>
  )
}

export default Input;