import React, { useState } from 'react';
import { Form0, Input0} from './style';

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

  //비밀번호 보이게 하기
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 데이터를 서버로 전송
    fetch('서버의 주소', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.message === 'SUCCESS'
          ? alert('회원가입 성공!')
          : alert('회원가입 실패...')
      );
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
