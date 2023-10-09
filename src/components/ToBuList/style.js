import styled, { css } from 'styled-components';

import checkbox from "../../images/checkbox.png"
import uncheckbox from "../../images/uncheckbox.png"
import React, { useState } from 'react';
import  { checkBoxClickReq } from "../../utils/axiosAPIs/axiosAPIs"
import { useNavigate } from "react-router-dom";

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

export const PercentNum = styled.div`
    width:30px;
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
    margin-left:10px;
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
 margin-bottom: 18px;
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
    margin-bottom: 18px;
    width: 20px;
    height: 20px;
`;

export const CheckBoxImg = styled.div`
    width: 20px;
    height: 20px;
    border: 0px solid #000;
    margin: auto 10px auto 10px;
    
    background-color: white;
    background-image: url(${uncheckbox});
    background-repeat: no-repeat;
    background-size: 20px;

    ${props =>
    props.$done &&
    css`
        background-color: white;
        background-image: url(${checkbox});
        background-repeat: no-repeat;
        background-size: 20px;
    `}
  
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

const Content = styled.div`
    width: 200px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    font-family: 'Cafe24Regular';
    color: #000;
    ${props =>
    props.$done &&
    css`
        color: #D8D8D8;
    `}
`;

export const UserListItem = function({
    $done, 
    dataType, 
    content, 
    id, 
    onDataChange
}) {
    //체크박스
    const [bool, setBool] = useState($done);
    const formDataId = new FormData();
    formDataId.append("id", id);
    const navigate = useNavigate();
    // const [endPoint, setEndPoint] = useState(dataType);
    const endPoint = dataType;
    const onToggleHandle = () => {
        setBool(!bool);
    
    const savePercent = async() => {
        try{
            if(endPoint === "To do list") {
                const response = await checkBoxClickReq(formDataId, "todo");
                console.log("style.js/todo 결과: ", response);
                onDataChange(response);
            }
            else {
                const response = await checkBoxClickReq(formDataId, "bucket");
                console.log("style.js/todo 결과: ", response);
                onDataChange(response);
            }
            
        }
        catch(error) {
            console.log("실패");
        }
    }
    savePercent();
    };

    const NavigateHandler = () => {
        if(dataType === "To do list"){
            navigate('/ToDoListPage');
        }
        else{
            navigate('/BucketListPage');
        }
      
    }

    return (
        <SlideText>
            <CheckBoxImg $done = {bool} 
             onClick={onToggleHandle} 
            />
            <Content 
            $done = {bool}
            onClick={NavigateHandler}
            >
              {content}
            </Content>
        </SlideText>
    );
};