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

    const [userData, setUserData] = useState([]);
    const [bucketData, setBucketData] = useState([]);

    const userReq = async () => {
        //localStorage로 유저 정보 받아오는 곳
        const userId = localStorage.getItem("userId");
        const id = localStorage.getItem("id");
        const content = localStorage.getItem("content");

        const response1 = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/todo/search`,{
                userId: userId,
            });
            console.log("데이터: ", response1.data)
        return response1;
    }

    const bucketReq = async () => {
        const userId = localStorage.getItem("userId");
        const response2 = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/bucket/search`,{
                userId: userId,
            });
        return response2;
    }

    useEffect(() => {
        userReq()
            .then((response1) => {
                setUserData(response1.data.allList);  
            })
            .catch((error) => {
                console.log('실패');
            });
        bucketReq()
            .then((response2) => {
                setBucketData(response2.data);  
            })
            .catch((error) => {
                console.log('실패');
            });
    },[]);

    // const handleIdCheck = (contentProp, isScrappedProp, idProp) => {
    // console.log(contentProp);
    // console.log(isScrappedProp);
    // console.log(idProp);
    // };
    return (
        <>
            <Header>나만의 리스트</Header>
            <DataContext.Provider value={userData}>
                <Container>
                    <ToBuList userData = {userData}/>
                    <ToBuList bucketData = {bucketData}/>
                </Container>
            </DataContext.Provider>
        </>
    );

}
export default HomePage;


