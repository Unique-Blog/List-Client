import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Input0, MainForm, Label, Button} from './style';

const NewLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
      const response = await axios.post('http://10.114.10.19:8080/user/login', {
          username: username,
          password: password
      });
    console.log('회원가입 성공:', response.data);
    //네비게이션
    navigate('/HomePage');
    } catch (error) {
    console.error('회원가입 실패:', error);
    }
  }

  return(
    <>
      {/* 헤더부분 */}
      <MainForm>
        <Label>아이디</Label>
        <Input0
            type="text"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <Label>비밀번호</Label>
        <Input0
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Input0
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
        />
      </MainForm>
      <Button onClick={handleLogin}>회원가입</Button>
    </>
  );
}

export default NewLoginPage;