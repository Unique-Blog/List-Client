//styles
import { PwNonVisi, Eye, InputBox, EyeState } from './style';
//library
import React, { useState } from 'react';

const PwNonVisible = ({ placeholder, value, onChange }) => {
  // 비밀번호 가시성 토글
  const [isPasswdVisible, setIsPasswdVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswdVisible(!isPasswdVisible);
  };
  return (
    <>
      <InputBox>
        <PwNonVisi
          type={isPasswdVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <Eye onClick={togglePasswordVisibility}>
          <EyeState
            $done={isPasswdVisible}
          />
        </Eye>
      </InputBox>
    </>
  );
}

export default PwNonVisible;