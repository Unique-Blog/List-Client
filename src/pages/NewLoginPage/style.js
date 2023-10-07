import styled, { css } from 'styled-components';

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
  /* 다른 스타일을 추가하려면 여기에 추가 */
`;

export const Label = styled.label`
  display: block;
  position: relative;
  font-size: 13px;
  font-weight: bold;
  width: 80px;
`;

export const Label2 = styled.label`
  display: block;
  position: relative;
  top: 13px;
  font-size: 13px;
  font-weight: bold;
  width: 80px;
`;

export const MainForm = styled.div`
  position: relative;
  width: 260px;
  top: 230px;
  margin: 0 auto;
`;

export const PwForm = styled.div`
  position: absolute;
  top: 95px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Desc = styled.p`
  font-size: 13px;
  width: 130px;
  color: red;
  position: relative;
  top: 105px;
`;

export const Button = styled.button`
  width: 260px;
  height: 50px;
  background-color: #3DA5F5;
  color: white;
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 220px;
  ${({ disabled }) => disabled && disabledStyles}
`;