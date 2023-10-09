//style
import { Header, Container } from "./style";
//components
import ToBuList from "../../components/ToBuList/ToBuList";
//library
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//하위 컴포넌트에 공유 데이터를 전달하는 함수
const DataContext = createContext();
export const useData = () => {
    return useContext(DataContext);
};

const HomePage = () => {

    const [toDoData, setToDoData] = useState([]);
    const [bucketData, setBucketData] = useState([]);

    const toDoReq = async () => {
        const userId = localStorage.getItem("userId");
        const toDoResponse = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/todo/search`,{
                userId: userId,
            });
            console.log("투두 퍼센트: ", toDoResponse.data.percentage);
        return toDoResponse.data;
    }


    const bucketReq = async () => {
        const userId = localStorage.getItem("userId");
        const bucketResponse = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/bucket/search`,{
                userId: userId,
            });
            console.log("데이터: ", bucketResponse.data.allList);

            console.log("버킷 퍼센트: ", bucketResponse.data.percentage);
        return bucketResponse.data;
    }
    

    useEffect(() => {
        toDoReq()
            .then((toDoResponse) => {
                setToDoData(toDoResponse);  
            })
            .catch((error) => {
                console.log('실패');
            });
        bucketReq()
            .then((bucketResponse) => {
                setBucketData(bucketResponse);  
            })
            .catch((error) => {
                console.log('실패');
            });
    },[]);

    return (
        <>
            <Header>나만의 리스트</Header>
            <DataContext.Provider value={toDoData}>
                <Container>
                    <ToBuList 
                    userData = {toDoData}
                    dataType = {"To do list"}
                    />
                    <ToBuList 
                    userData = {bucketData}
                    dataType = {"Bucket list"}
                    />
                </Container>
            </DataContext.Provider>
        </>
    );
}
export default HomePage;


