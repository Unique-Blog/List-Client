import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Label, Input0, Button, MainForm } from './style';

const NewLoginPage = () => {
// 입력한 데이터 담기
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const navigate = useNavigate();

// 비밀번호와 비밀번호 확인 같은지 체크하기
  const isSame = password === repassword && password !== '';


// input에 모든 입력값이 다 입력되었는지 체크하기
  const isValid = username !== '' && password !== '' && repassword !== '';

// localStorage에 회원가입한 아이디와 비밀번호 저장하기
  const handleLogin = async () => {
    try {
        const response = await axios.post('http://10.114.10.19:8080/user/login', {
            username: username,
            password: password,
            repassword: repassword,
        });

        // 서버에서 반환한 데이터를 기반으로 로그인 상태를 처리할 수 있습니다.
        console.log('로그인 성공:', response.data);
        //네비게이션
        navigate('/LoginPage');
        } catch (error) {
        // 로그인 실패 시 처리
        console.error('로그인 실패:', error);
        }
  };

  return (
    <>
      <MainForm>
        <Label>아이디</Label>
        <Input0
          type="text"
          placeholder="아이디"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>비밀번호</Label>
        <Input0
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input0
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => setRePassword(e.target.value)}
        />
        {repassword !== '' && !isSame && (
          <p className="repassword">{isValid && !isSame ? '비밀번호가 다릅니다.' : ''}</p>
        )}
      </MainForm>
      <Button
        className="formBtn"
        disabled={!isValid || !isSame}
        onClick={handleLogin}
      >
        회원가입
      </Button>
      </>
  );
};

export default NewLoginPage;