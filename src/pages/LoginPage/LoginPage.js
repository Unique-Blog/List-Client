import Header from './Header';
import Form from './LoginForm';
import Button from './Button';
import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        // 초기 데이터 상태를 설정
        id: '',
        password: '',
    });

    const handleFormSubmit = () => {
        // Form 컴포넌트에서 전달된 데이터를 처리
        // formData 상태를 이용하여 데이터를 사용할 수 있음
        // 예: 서버로 데이터를 보내거나 다른 작업을 수행
    };

    return (
        <>
        <Header />
        <Form formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />
        <Button type="submit" onClick={handleFormSubmit} />
        </>
    );
};

export default LoginPage;
