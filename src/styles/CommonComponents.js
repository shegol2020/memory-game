import styled from "styled-components";

const Container = styled.section`
  width: 940px;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 16px 24px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  border: none;
  background-color: #ffbf20;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #ffd97c;
  }

  &:active {
    background-color: #ffd97c;
  }
`;

export {Container, Button}
