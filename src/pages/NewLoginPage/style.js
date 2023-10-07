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
  left: 70px
`;

export const Input0 = styled.input`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #bababa;
  width: 260px;
  height: 43px;
  outline: none;
`;

export const Input = styled.input`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #bababa;
  width: 260px;
  height: 43px;
  outline: none;
`;

export const Input1 = styled.input`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
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
  margin-top: 240px;
  margin-left: 70px;
  border: none;
  ${({ disabled }) => disabled && disabledStyles}
`;

export const Desc = styled.p`
  font-size: 13px;
  width: 130px;
  color: red;
  position: relative;
  top: -20px;
`;

export const Eye = styled.div`
  position:relative;
  width: 50px;
  left: 235px;
  top: -20px;
`;

export const Eye2 = styled.div`
  position:relative;
  width: 50px;
  left: 235px;
  top: -35px;
`;