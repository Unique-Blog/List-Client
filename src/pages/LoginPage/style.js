import styled, { css } from 'styled-components';

export const Form0 = styled.div`
  display: flex;
  position: relative;
  top: 250px;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 6px;
`;

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
  /* 다른 스타일을 추가하려면 여기에 추가 */
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

export const LinkBtn = styled.div`
  margin-top: 80px;
`;