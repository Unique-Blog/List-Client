import { Header, Container } from "./style";
import ToBuList from "../../components/ToBuList/ToBuList";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

const HomePage = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [bucketData, setBucketData] = useState([]);

    const userReq = async () => {
        const userId = localStorage.getItem("userId");
        const response1 = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/todo/search`,{
                userId: userId,
            });
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
                // map으로 배열 자체 넘기기
                console.log('response: ',response1);
                console.log('response.data: ',response1.data);
                console.log(response1.data[0]);
                console.log(response1.data[0].userId);

                setUserData(response1.data);  
                
            })
            .catch((error) => {
                console.log('실패');
                const statusCode = error.response1.status;

                if (statusCode === 401) {
                // 400 상태 코드 처리
                    alert("로그인 해주세요");
                    navigate("/");
                } else if (statusCode === 409) {
                    alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                    navigate("/");
                }
            });
        bucketReq()
            .then((response2) => {
                // map으로 배열 자체 넘기기
                console.log('response: ',response2);
                console.log('response.data: ',response2.data);
                console.log(response2.data[0]);
                console.log(response2.data[0].userId);

                setBucketData(response2.data);  
                
            })
            .catch((error) => {
                console.log('실패');
                const statusCode = error.response2.status;

                if (statusCode === 401) {
                // 400 상태 코드 처리
                    alert("로그인 해주세요");
                    navigate("/");
                } else if (statusCode === 409) {
                    alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                    navigate("/");
                }
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
                    <ToBuList userData = {bucketData}/>
                </Container>
            </DataContext.Provider>
        </>
    );

}
export default HomePage;


