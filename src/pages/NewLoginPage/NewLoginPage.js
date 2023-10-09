//network
import axios from 'axios';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import {
  Header,
  BackButton,
  Empty,
  Label,
  Button,
  MainForm,
  Desc,
  Label2,
  PwForm
} from './style';

//components
import PwVisible from '../../components/InputPw/PwVisible';
import PwNonVisible from '../../components/InputPw/PwNonVisible';

//img
import BackButtonImg from "../../images/arrow.png";

const NewLoginPage = () => {
  // 입력한 데이터 담기
  const [userId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const navigate = useNavigate();

  // 비밀번호와 비밀번호 확인 같은지 체크하기
  const isSame = password === repassword && password !== '';

  // input에 모든 입력값이 다 입력되었는지 체크하기
  const isValid = userId !== '' && password !== '' && repassword !== '';

  //네트워크 통신 axios
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`, {
        userId: userId,
        userPw: password,
      });

      // 서버에서 반환한 데이터를 기반으로 로그인 상태를 처리할 수 있습니다.
      console.log('회원가입 성공:', response.data);
      //네비게이션
      navigate('/');
    } catch (error) {
      // 로그인 실패 시 처리
      console.error('회원가입 실패:', error);
    }
  };

  const navigateHandler = () => {
        navigate('/');
}

  return (
    <>
      <Header>
        <BackButton onClick={() => navigateHandler()} src={BackButtonImg} alt="뒤로가기 버튼" />
        회원가입
        <Empty src={BackButtonImg} alt="투명" />
      </Header>

      <MainForm>
        <Label>아이디</Label>
        <PwVisible
          value={userId}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label2>비밀번호</Label2>
        <PwForm>
          <PwNonVisible
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <PwNonVisible
            placeholder="비밀번호 확인"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)} />
        </PwForm>
        {repassword !== '' && !isSame && (
          <Desc className="repassword">{!isSame ? '비밀번호가 다릅니다.' : ''}</Desc>
        )}
        <Button
          className="formBtn"
          disabled={!isValid || !isSame}
          onClick={handleLogin}
        >
          회원가입
        </Button>
      </MainForm>
    </>
  );
};

export default NewLoginPage;