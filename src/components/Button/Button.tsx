import React from 'react';

interface ButtonProps {
  name: string;
  click: () => void
}

const  Button = (props: ButtonProps) => <button onClick={props.click}>{props.name}</button>;

export default Button;