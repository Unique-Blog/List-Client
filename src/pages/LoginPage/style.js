import styled, { css } from 'styled-components';

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
  /* 다른 스타일을 추가하려면 여기에 추가 */
`;

export const Header0 = styled.h1`
  margin-top: 210px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form0 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input0 = styled.input`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #bababa;
  width: 260px;
  height: 43px;
  outline: none;
`;

export const Button = styled.button`
  width: 260px;
  height: 50px;
  background-color: #3DA5F5;
  color: white;
  border-radius: 5px;
  margin-top: 130px;
  margin-left: 8px;
  border: none;
  ${({ disabled }) => disabled && disabledStyles}
`;