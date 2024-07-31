import styled, { css } from 'styled-components';


export const Header = styled.div`
  font-size: 40px;
  margin-top: 160px;
  text-align: center;
  font-family: 'Cafe24Bold';
`;

export const Form0 = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 6px;
`;



export const WrongId = styled.p` 
  font-size: 13px;
  color: red;
  height: 30px;
`;


export const Button = styled.button`
  width: 260px;
  height: 50px;
  position: absolute;
  top: 120px;
  background-color: #3DA5F5;
  color: white;
  border-radius: 5px;
  border: none;
  ${({ disabled }) => disabled && disabledStyles}
`;

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
`;

export const LinkBtn = styled.div`
  text-align: center;
  margin-top: 100px;
`;