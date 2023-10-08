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
                setUserData(response1.data);  
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


