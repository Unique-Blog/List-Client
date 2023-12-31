import styled, { css } from 'styled-components';
import CheckBox  from '../../images/checkbox.png';
import UnCheckBox  from '../../images/uncheckbox.png';
import Setting from '../../images/setting.png';
import React, { useState } from 'react';
//components
import BucketScrap from "../../components/Scrap/BucketScrap";
import { checkBoxClickReq } from '../../utils/axiosAPIs/axiosAPIs';

export const Header = styled.div`
  display:flex;
  width:350px;
  margin: 120px auto 0;
  justify-content: space-between;
  align-content: center;

  font-size: 35px;
  font-family: 'Cafe24Bold';
`;

export const BackButton = styled.img`
    width: 20px;
    height: 20px;
    margin: auto 0px auto 5px;
    transform: rotate(180deg); //180도 돌리기
`;

export const Empty = styled.img`
    width: 20px;
    height: 20px;
    margin: auto 0px auto 5px;
    visibility: hidden;
`;
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    height: 350px;
    width: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    top: 20px;
    left: 4px;
    &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`

export const AddContainer = styled.div`
  display:flex;
  width: 328px;
  height: 43px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  position: relative;
  margin: 0 auto;
`;

export const AddForm = styled.input`
  width: 300px;
  border: 0px solid #000;
  border-radius: 5px;
  padding-left: 7px;
  outline: none;
`;

export const WriteButton = styled.button`
    width: 50px;
    height: 40px;
    border-radius: 5px;
    border: 0px solid #000;
    background-color: white;
`;

export const WriteImg = styled.img`
    width: 20px;
    height: 20px;
`;

export const ListContainer = styled.div`
  display:flex;
  width: 328px;
  height: 43px;
  margin: 5px 7px 0px auto;
  border: 1px solid #000;
  border-radius: 4px;
  outline: none;
  background-color: white;
  
`;

export const CheckboxButton = styled.div`
    width: 20px;
    height: 20px;
    border: 0px solid #000;
    margin: auto 10px auto 10px;
    
    background-color: white;
    background-image: url(${UnCheckBox});
    background-repeat: no-repeat;
    background-size: 20px;

    ${props =>
    props.$done &&
    css`
        background-color: white;
        background-image: url(${CheckBox});
        background-repeat: no-repeat;
        background-size: 20px;
    `}
  
`;

export const SettingButton = styled.div`
    width: 20px;
    height: 20px;
    margin: auto 5px auto auto;
    background-color: white;
    background-image: url(${Setting});
    background-repeat: no-repeat;
    background-size: 20px;
`;

const Content = styled.div`
    width: 230px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: auto 5px auto 5px;
    font-size: 20px;
    font-family: 'Cafe24Regular';
    color: #000;
    ${props =>
    props.$done &&
    css`
        color: #D8D8D8;
    `}
`;

export const ToDoItem = function({$done, content, id, userId, completed, onDataChange}) {
    //modal 창
    const [open, setOpen] = useState(false);

    function OpenModal(){setOpen(true);}
    function closeModal(){setOpen(false);}
    //체크박스
    const [bool, setBool] = useState($done);

    const formDataId = new FormData();
    formDataId.append("id", id);
    const onToggleHandle = () => {
        setBool(!bool);
        checkBoxClickReq(formDataId, "bucket");
    };

    const bucketDataChange = (newData) => {
      onDataChange(newData);
      console.log("상위 컴포넌트한테 보낸 데이터 결과: ", newData);
  }

    const settingHandle = () => {

    }
    return (
        <>
        <ListContainer>
            <CheckboxButton $done = {bool} 
                onClick={() => {
                onToggleHandle();
                }}
            />
            <Content
                $done = {bool}>
                {content}
            </Content>

            <SettingButton 
                onClick={() => {
                    settingHandle();
                    OpenModal();
                }}
                />
                
        </ListContainer>
        {<BucketScrap isOpen={open} closeModal={closeModal} id = {id} userId={userId} completed={completed} onDataChange={bucketDataChange}/>}
        
        </>
    );
};