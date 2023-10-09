//library
import React, { useState, useEffect } from 'react';

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
import { addListReq } from "../../utils/axiosAPIs/axiosAPIs"
import { searchListReq } from "../../utils/axiosAPIs/axiosAPIs"

//img
import BackButtonImg from "../../images/arrow.png";
import Write from "../../images/pencil.png";
import Scrap from "../../components/Scrap/Scrap";

const ToDoListPage = () => {

    const [serverListData, setServerListData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await searchListReq(sendId);
                console.log("서버 데이터 조회 결과: ", response.data);
                setServerListData(response.data.allList);
            } catch (error) {
                console.error('데이터 조회 실패:', error);
            }
        };
        loadData();
    }, []);


    const sendId = {
        userId: "1"
    }

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
                const response = await addListReq(inputText);
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

    return (
        <>
            <Header>
                <BackButton src={BackButtonImg} alt="뒤로가기 버튼" />
                To Do List
                <Empty src={BackButtonImg} alt="투명" />
            </Header>

            <Container>
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

                {serverListData.map((serverData, index) => (
                    <div key={index}>
                        <ToDoItem 
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

export default ToDoListPage;