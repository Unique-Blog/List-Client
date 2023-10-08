import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
    margin: 20px 10px;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: white;
`;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    height: 30px;
    justify-content: space-evenly;
    border-bottom: 1px solid #000; 
    font-family: 'Cafe24Regular';
`;

export const Progress = styled.div`
  width: 170px;
  height: 8px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  margin: auto;
`;

export const Progress2 = styled.div`
  display:flex;
  width: 180px;
  height: 15px;
  border-radius: 20px;
  background-color: #E0E2E7; //회색
  border: 1px solid black;
  margin-right: -10px;
`;

// Dealt 컴포넌트를 스타일링합니다
export const Dealt = styled.div`
 border-radius: 20px;
  background-color: #3DA5F5; // 테마에서 색상을 가져오는 예시입니다.
  height: 100%;
`;

export const BodyContainer = styled.div`
    display: flex;
    font-family: 'Cafe24Regular';
    justify-content: center;
`;

export const BackButton = styled.button`
    border-bottom-left-radius: 10px;
    width: 30px;
    height: 130px;  
    left: -40px;
    top: 65px;
    border: 0px solid black;

`;

export const BackImg = styled.img `
    width: 20px;
    height: 20px;
    transform: rotate(180deg); //180도 돌리기
`;

export const FrontButton = styled.button`
    border-bottom-right-radius: 10px;
    width: 30px;
    height: 130px;
    right: -40px;
    top: 65px;
    border: 0px solid black;
 
`;

export const FrontImg = styled.img `
    width: 20px;
    height: 20px;
`;

export const CheckBoxImg = styled.img `
    width: 15px;
    height: 15px;
    margin-right: 15px;
`;

export const SlideText = styled.span`
    display:flex;
    font-size: 18px;
    height: 100%;
    width: 100%;
    text-align: left;
    align-items: center;
`;

export const SlideContainer = styled.div`
    width: 250px;
    height: 130px;
`;