import styled, { css } from 'styled-components';
import openeyeimg from '../../images/openEye.png';
import closeeyeimg from '../../images/closeEye.png';

export const InputIdContainer = styled.input`
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`;

export const InputBox = styled.div`
  width: 260px;
  height: 43px;
  position: relative;
`;

export const PwNonVisi = styled.input`
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`;

export const Eye = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const EyeState = styled.div` 
  background-image:  url(${closeeyeimg}); //기본상태: 닫힌 눈
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  opacity: 0.4; //투명도
  ${props =>
    props.$done &&
    css`
        background-image: url(${openeyeimg}); //props로 false를 전달 받으면 열린 눈
    `}
`;