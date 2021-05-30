import styled from 'styled-components';

const Container = styled.div`
  background-color: #ccc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
`;

const MessageError = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 700;
`;

export { 
  Container, 
  Content, 
  Header, 
  MessageError, 
};
