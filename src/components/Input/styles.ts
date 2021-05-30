import styled from 'styled-components';

const InputContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  text-align: left
`;

const BasicInput = styled.input`
  width: 100%;
  height: 25px;
`;

export { InputContainer, Label, BasicInput };
