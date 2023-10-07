import Header from './Header';
import React, { useState } from 'react';
import axios from 'axios';
import {Form0, Input0, Button, Eye } from './style';
import { useNavigate } from "react-router-dom";
import EyeImage from '../../components/eye/Eye';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // 상태 추가

    const togglePasswordVisibility = () => {
        // 비밀번호 가시성을 토글
        setIsPasswordVisible(!isPasswordVisible);
    };

    const isValid = username !== '' && password !== '';  

    const handleLogin = async () => {
        try {
        const response = await axios.post('http://10.114.10.19:8080/user/login', {
            username: username,
            password: password
        });

        // 서버에서 반환한 데이터를 기반으로 로그인 상태를 처리할 수 있습니다.
        console.log('로그인 성공:', response.data);
        //네비게이션
        navigate('/HomePage');
        } catch (error) {
        // 로그인 실패 시 처리
        console.error('로그인 실패:', error);
        }
    };
    

    return (
        <>
        <Header />
        <Form0>
        <Input0
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <Input0
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Eye onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeImage/> : <EyeImage/>}</Eye>
        <Button disabled={!isValid} onClick={handleLogin}>로그인</Button>
        </Form0>
        </>
    );
};

export default LoginPage;
