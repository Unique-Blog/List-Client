import React, { useState } from 'react';
import { Form0, Input0 } from './style';
import axios from 'axios'; // axios 라이브러리를 가져옵니다.

const LoginForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios를 사용하여 서버로 POST 요청을 보냅니다.
    axios
      .post('서버의 주소', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.message === 'SUCCESS') {
          alert('회원가입 성공!');
        } else {
          alert('회원가입 실패...');
        }
      })
      .catch((error) => {
        console.error('에러 발생:', error);
      });
  };

  return (
    <>
      <Form0 onSubmit={handleSubmit}>
        <Input0
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
        />
        <div className="password-toggle">
          <Input0
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleTogglePassword}
            />
            Show Password
          </label>
        </div>
      </Form0>
    </>
  );
};

export default LoginForm;
