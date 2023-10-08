import { Header, Container } from "./style";
import ToBuList from "../../components/ToBuList/ToBuList";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

const HomePage = () => {
    const [userData, setUserData] = useState([]);

    const userReq = async () => {
        const userId = localStorage.getItem("userId");
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/todo/search`,{
                userId: userId,
            });
        return response;
    }

    useEffect(() => {
        userReq()
            .then((response) => {
                // map으로 배열 자체 넘기기
                console.log('response: ',response);
                console.log('response.data: ',response.data);
                console.log(response.data[0]);
                console.log(response.data[0].userId);

                setUserData(response.data);  
                
            })
            .catch((error) => {
                console.log('실패');
                // const statusCode = error.response.status;

                // if (statusCode === 401) {
                // // 400 상태 코드 처리
                //     alert("로그인 해주세요");
                //     navigate("/");
                // } else if (statusCode === 409) {
                //     alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                //     navigate("/");
                // }
            });
    },[]);

    // const handleIdCheck = (contentProp, isScrappedProp, idProp) => {
    // console.log(contentProp);
    // console.log(isScrappedProp);
    // console.log(idProp);
    // };
    return (
        <>
        {/* <ul className = {{marginBottom: 65}}>
            {Array.isArray(userData) &&
                userData.map((dataList, index) => (
                <li
                    key={index}
                    onClick={() =>
                    handleIdCheck(
                        dataList.content,
                        dataList.completed,
                    )
                    }
                > { dataList.content}
                </li>
            ))}
        </ul> */}
            <Header>나만의 리스트</Header>
            <DataContext.Provider value={userData}>
                <Container>
                    <ToBuList userData = {userData}/>
                    <ToBuList userData/>
                </Container>
            </DataContext.Provider>
        </>
    );

}
export default HomePage;


