//network
import axios from 'axios';

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//styles
import {Form0, Button } from './style';
//Components
import PwVisible from '../../components/InputPw/PwVisible';
import PwNonVisible from '../../components/InputPw/PwNonVisible';
import Header from './Header';

const LoginPage = () => {
    //화면 전환
    const navigate = useNavigate();
    //서버와 통신할 때 필요한 정보(아이디, 패스워드)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //input 활성화 조건
    const isValid = username !== '' && password !== '';  
    //네트워크 통신 axios
    const handleLogin = async () => {
        try {
        const response = await axios.post('http://10.114.10.19:8080/user/login', {
            username: username,
            password: password
        });

        // 서버에서 반환한 데이터를 기반으로 로그인 상태를 처리할 수 있습니다.
        console.log('로그인 성공:', response.data);
        //로그인 성공시 화면 전환
        navigate('/HomePage');
        } catch (error) {
        // 로그인 실패 시 처리
        console.error('로그인 실패:', error);
        }
    };
    return (
        <>
            <Form0>
                <PwVisible 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <PwNonVisible 
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <Button disabled={!isValid} onClick={handleLogin}>로그인</Button>
            </Form0>
        </>
    );
};

export default LoginPage;
