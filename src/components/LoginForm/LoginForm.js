import React, { useState } from 'react';
import { Form0, Input0 } from './style';
import axios from 'axios'; // axios 라이브러리를 가져옵니다.

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        username: username,
        password: password
      });

      // 서버에서 반환한 데이터를 기반으로 로그인 상태를 처리할 수 있습니다.
      console.log('로그인 성공:', response.data);
      //
    } catch (error) {
      // 로그인 실패 시 처리
      console.error('로그인 실패:', error);
    }
  };


  return (
    <>
      <div>
      <input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>

    </>
  );
};

export default LoginForm;
