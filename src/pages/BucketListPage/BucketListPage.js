//library
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

//style
import {
    Header,
    Container,
    BackButton,
    Empty,
    AddContainer,
    AddForm,
    WriteButton,
    WriteImg,
    ToDoItem,
} from "./style";

//APIs
import { bucketAddListReq } from "../../utils/axiosAPIs/axiosAPIs"
import { bucketSearchListReq } from "../../utils/axiosAPIs/axiosAPIs"

//img
import BackButtonImg from "../../images/arrow.png";
import Write from "../../images/pencil.png";

const BucketListPage = () => {

    const [serverListData, setServerListData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [text, setText] = useState("");

    const localId = localStorage.getItem("userId");

    const sendId = {
        userId: localId
    }
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await bucketSearchListReq(sendId);
                console.log("서버 데이터 조회 결과: ", response.data);
                setServerListData(response.data.allList);
            } catch (error) {
                console.error('데이터 조회 실패:', error);
            }
        };
        loadData();
    }, []);



    const handleOnChange = (e) => {
        setInputText(e.target.value);
        const inputText = e.target.value;
        setText(inputText);
    }

    const handleOnClick = () => {
        console.log(inputText);
        setText('');
        const saveData = async () => {
            try {
                const response = await bucketAddListReq(inputText);
                console.log("서버 데이터 저장 결과: ", response.data);
                if(response === 400){
                    alert("값을 입력해 주세요");
                }
                else {
                    setServerListData(response.data);
                }
                
            } catch (error) {
                console.error('데이터 저장 실패:', error);
            }
        };
        saveData();
        setInputText('');
    }
    const handleDataChange =(newData) => {
        setServerListData(newData);
    }


    return (
        <>
            <Header>
                <Link to="/homePage">
                <BackButton src={BackButtonImg} alt="뒤로가기 버튼" 
                />
                </Link>
                Bucket List
                <Empty src={BackButtonImg} alt="투명" />
            </Header>
            <AddContainer>
                    <AddForm
                        type="text"
                        placeholder='오늘의 할 일을 작성하세요!'
                        name="userInputValue"
                        value={text}
                        onChange={handleOnChange}
                    />
                    <WriteButton onClick={handleOnClick}>
                        <WriteImg src={Write} alt="작성" />
                    </WriteButton>
                </AddContainer>
            <Container>
                {serverListData.map((serverData, index) => (
                    <div key={index}>
                        <ToDoItem 
                            onDataChange={handleDataChange} 
                            $done={serverData.completed}
                            content={serverData.content}
                            id={serverData.id}
                            userId={serverData.userId}
                        />
                        
                    </div>
                ))}

            </Container>
        </>
    );
}

export default BucketListPage;